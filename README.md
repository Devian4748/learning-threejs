# learning-threejs

deploy website : https://devian4748.github.io/learning-threejs/

## What is WebGL and why use Three.js

### What is WebGL

**WebGL** is a JavaScript API that renders triangles in a canvas

### What is ThreeJS

**Three.js** is a JavaScript library under MIT license that works right above WebGL. The library's goal is to drastically simplify the process of handling all of what we just stated.

### How to render

We need 4 element to render

- A scene
- Some Objects
- A camera
- A renderer

## Transform objects

There are 4 properties to transform objects. All classes that inherit from the Object3D class possess those properties.

- position
- scale
- rotation
- quaternion

### Position

The position possesses 3 essential properties. The direction of each axis is purely arbitrary. As for the meaning of 1 unit, it's up to you.

- x
- y
- z

The position property is an instnace of the Vector3 class.

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

## Animations

The screen you are looking at runs at a specific frequency. We call that a frame rate. The frame rate mostly depends on the screen, but the computer itself has limitations. Most screens run at 60 frames per second. If you do the maths, that means about a frame every 16ms. But some screens can run much faster, and when the computer has difficulties processing things, it'll run more slowly.

### window.requestAnimation(...)

requestAnimationFrame will execute the function you provide on the next frame.

### Adaptation to the framerate

To adapt the animation to the framerate, we need to know how much time it's been since the last tick.

You can use

- Clock Class
- Timestamp

### Using a library

Sometimes you'll want to animate your scene in a very specific way that will require using another library.

- GSAP

GSAP has a built-in requestAnimationFrame, so you don't need to update the animation by yourself, but still, if you want to see the cube moving, you need to keep doing the renders of your scene on each frame.

## Cameras

There are several types of cameras.

- Camera

  > This class is abstract class.

- ArrayCamera
- StereoCamera
- CubeCamera
- OrthographicCamera
  > The OrthographicCamera is used to create orthographic renders of your scene without perspective.
- PerspectiveCamera
  > Simulated a real-life camera with perspective.

### PerspectiveCamera

PerspectiveCamera class needs some parameters to be instantiated

- Field of view
  > The first parameter called field of view corresponds to your camera view's vertical amplitude angle in degrees.  
  > Recommend scope : 45 ~ 75
- Aspect ratio
- Near and far

> **z-fighting**  
> While you might be tempted to use very small and very large values like 0.0001 and 9999999 you might end up with a bug called z-fighting where two faces seem to fight for which one will be rendered above the other.

### OrthographicCamera

OrthographicCamera class needs some parameters to be instantiated. Instead of a field of view, you must provide how far the camera can see in each direction

- left
- right
- top
- bottom
- near
- far

left, right, top, bottom area ==== renderer area

### Custom controls

**Control with Mouse**

1. Get mouse coordinates using mousemove event
2. Transform Object in animation loop

### Built-in controls

- DeviceOrientationControls
- FlyControls
- FirstPersonControls
- PointerLockControls
- OrbitControls
- TrackballControls
- TransformControls
- DragControls

**OrbitControls**

You can now

- drag and drop
- move camera
- zoom in or out

Feature

- Target
  > By default, the camera is looking at the center of the scene. you can change that with the target property
- Damping
  > The damping will smooth the animation by adding some kind of acceleration and friction formulas.
