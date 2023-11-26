# learning-threejs

deploy website : https://devian4748.github.io/learning-threejs/

## What is WebGL and why use Three.js

### What is WebGL

**WebGL** is a JavaScript API that renders triangles in a canvas

It's fast because it uses the **Graphic Processing Unit (GPU)** of the visitor. The GPU can do thousands of parallel calculations.

Once the model's points are well placed, the GPU needs to draw each visible pixel of those triangles. The instructions to place the points and draw the pixels are written in what we call **shaders**.

We also need to provide data to these shaders. For example: how to place the points according to the model transformations and the camera's properties. These are called **matrices**.

Drawing a single triangle on the canvas would take at least 100 lines of code. But native WebGL benefits from existing at a low level, very close to the GPU. This enables excellent optimizations and more control.

### What is ThreeJS

**Three.js** is a JavaScript library under MIT license that works right above WebGL. The library's goal is to drastically simplify the process of handling all of what we just stated.

### How to render

We need 4 element to render

- A scene
- Some Objects
- A camera
- A renderer

## Transform objects

There are 4 properties to transform objects

- position
- scale
- rotation
- quaternion

All classes that inherit from the Object3D class possess those properties.

Those properties will be compiled in what we call matrices. Matrices are used internally by Three.js, by the WebGL, and by the GPU to transform things.

### Position

The position possesses 3 essential properties

- x
- y
- z

The direction of each axis is purely arbitrary, and it can vary according to the environment. In Three.js, we usually consider that the y axis is going upward, the z axis is going backward, and the x axis is going to the right.

As for the meaning of 1 unit, it's up to you.

> Make sure to do that before you call the **render(...)** method or you will render the mesh before moving it.

The position property is an instnace of the Vector3 class. and it has useful methods.

- **Vector3.prototype.length()**

  You can get the length of a vector.

- **Vector3.prototype.distanceTo(Vector3)**

  You can get the distance from another Vector3

- **Vector3.prototype.normalize()**

  You can normalize its value

- **Vector3.prototype.set(x, y, z)**

  You can update x, y and z axes

#### Axes helper

The AxesHelper will display 3 lines corresponding to the x, y and z axes, each one starting at the center of the scene and going in the corresponding direction.

### Scale

Scale is a Vector3. By default, x, y and z are equal to 1.

### Rotate

There are two ways of handling a rotation.

- rotation
- quaternion

Three.js supports both, and updating one will automatically update the other.

_Rotation_

The rotation property also has x, y, and z properties, but instead of a Vector3, it's a **Euler**.

The value of these axes is expressed in radians.

> **Gimbal Lock**  
> while you rotate the x axis, you also change the other axes' orientation. The rotation applies in the following order: x, y, and then z. That can result in weird behaviors like one named gimbal lock when one axis has no more effect, all because of the previous ones.

We can change this order by using the reorder(...) method and this is why most engines and 3D softwares use another solution named **Quaternion**.

_Quaternion_

The quaternion property also expresses a rotation, but in a more mathematical way, which solves the order problem.

**Object3D.prototype.lookAt(Vector3)**
Object3D instances have a method that lets you ask an object to look at something.

The object will automatically rotate its -z axis toward the target you provided.

### Scene graph

You can group related objects with Group class.
