// src/utils/resource.collection.ts

class ResourceCollection<T> {
    private resources: T[] = [];
  
    add(resource: T): void {
      this.resources.push(resource);
      console.log(`Added resource: ${resource}`);
    }
  
    getAll(): T[] {
      return this.resources;
    }
  }
  
  export { ResourceCollection };
  