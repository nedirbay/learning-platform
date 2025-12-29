import type { Product } from '../entity/Product'

export interface ProductRepository {
  getProducts(): Promise<Product[]>
  getProductById(id: string): Promise<Product>
  createProduct(product: Product): Promise<Product>
  updateProduct(product: Product): Promise<Product>
  deleteProduct(id: string): Promise<void>
}
