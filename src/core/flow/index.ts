export type Listener<T> = (value: T) => void

// Ýönekeý hadysa akymy (Event stream)
export class Flow<T> {
  protected listeners = new Set<Listener<T>>()

  subscribe(listener: Listener<T>): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }
}

export class MutableFlow<T> extends Flow<T> {
  emit(value: T): void {
    this.listeners.forEach((listener) => listener(value))
  }
}

// Ýagdaýy saklaýan akym (State stream)
export class StateFlow<T> extends Flow<T> {
  protected _value: T

  constructor(initialValue: T) {
    super()
    this._value = initialValue
  }

  get value() {
    return this._value
  }

  subscribe(listener: Listener<T>): () => void {
    const unsubscribe = super.subscribe(listener)
    listener(this._value) // Abuna bolan badyna häzirki bahany iberýär
    return unsubscribe
  }
}

// Üýtgedip bolýan StateFlow
export class MutableStateFlow<T> extends StateFlow<T> {
  constructor(
    initialValue: T,
    private debugName?: string,
  ) {
    super(initialValue)
  }

  update(partial: Partial<T> | ((prev: T) => Partial<T>)) {
    const newValue = typeof partial === 'function' ? (partial as any)(this._value) : partial

    this.set({ ...this._value, ...newValue })
  }

  set(value: T): void {
    if (this._value !== value) {
      if (import.meta.env.DEV && this.debugName) {
        console.groupCollapsed(`[StateFlow] ${this.debugName} updated`)
        console.log('Prev:', this._value)
        console.log('Next:', value)
        console.groupEnd()
      }
      this._value = value
      this.listeners.forEach((listener) => listener(this._value))
    }
  }

  asStateFlow(): StateFlow<T> {
    return this
  }
}
