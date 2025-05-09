const SurfaceAreaCalculator = {
  // Properties for different shape dimensions
  cube: {
    side: 0,
    surfaceArea() {
      return 6 * this.side ** 2;
    }
  },

  sphere: {
    radius: 0,
    surfaceArea() {
      return 4 * Math.PI * this.radius ** 2;
    }
  },

  cylinder: {
    radius: 0,
    height: 0,
    surfaceArea() {
      return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
  },

  // Method to update dimensions
  setDimensions(shape, dimensions) {
    if (this[shape]) {
      Object.assign(this[shape], dimensions);
    } else {
      console.log("Shape not supported.");
    }
  }
};

// Example usage:
SurfaceAreaCalculator.setDimensions('cube', { side: 5 });
console.log("Cube Surface Area:", SurfaceAreaCalculator.cube.surfaceArea());

SurfaceAreaCalculator.setDimensions('sphere', { radius: 4 });
console.log("Sphere Surface Area:", SurfaceAreaCalculator.sphere.surfaceArea());

SurfaceAreaCalculator.setDimensions('cylinder', { radius: 3, height: 7 });
console.log("Cylinder Surface Area:", SurfaceAreaCalculator.cylinder.surfaceArea());
