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

There are two ways of handling a rotation. Three.js supports both, and updating one will automatically update the other.

- rotation
- quaternion

_Rotation_

The rotation property also has x, y, and z properties, but instead of a Vector3, it's a **Euler**.

The value of these axes is expressed in radians.

> **Gimbal Lock**  
> while you rotate the x axis, you also change the other axes' orientation. The rotation applies in the following order: x, y, and then z. That can result in weird behaviors like one named gimbal lock when one axis has no more effect, all because of the previous ones.

We can change this order by using the reorder(...) method

_Quaternion_

The quaternion property also expresses a rotation, but in a more mathematical way, which solves the order problem.

### Scene graph

You can group related objects with Group class.

## Animations

> **FPS (Frame Per Second)**  
> The screen you are looking at runs at a specific frequency. We call that a frame rate. The frame rate mostly depends on the screen, but the computer itself has limitations. Most screens run at 60 frames per second. If you do the maths, that means about a frame every 16ms. But some screens can run much faster, and when the computer has difficulties processing things, it'll run more slowly.

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

## Cameras

There are several types of cameras.

- Camera
- ArrayCamera
- StereoCamera
- CubeCamera
- OrthographicCamera
- PerspectiveCamera

### PerspectiveCamera

PerspectiveCamera class needs some parameters to be instantiated

- Field of view
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
- Damping

## FullScreen and Resizing

### Fit in the viewport

- Using window.innerSizes
- Styling - margin, padding, outline, overflow

### Handle resize

- Using window event handler - resize
  - Update sizes
  - Update camera aspect ratio and projection matrix
  - Update renderer
  - Update renderer pixel ratio

### Handle pixel ratio

- Using window.devicePixelRatio
  - 1 : 1 times
  - 2 : 4 times
  - 3 : 9 times

### Handle fullscreen

- Using window.fullscreenElement
- Using element.requestFullscreen()
- Using document.exitFullscreen();

## Geometries

### What is geometry

In Three.js, geometries are composed of vertices and faces

We can use geometries to create meshes or to form particles

### The different built-in geometries

- BufferGeometry
- BoxGeometry
- CapsuleGeometry
- CircleGeometry
- ConeGeometry
- CylinderGeometry
- DodecahedronGeometry
- ExtrudeGeometry
- IcosahedronGeometry
- LatheGeometry
- OctahedronGeometry
- PlaneGeometry
- RingGeometry
- ShapeGeometry
- SphereGeometry
- TetrahedronGeometry
- TorusGeometry
- TorusKnotGeometry
- TubeGeometry

### BoxGeometry

The BoxGeometry has 6 parameters

- width
- height
- depth
- widthSegments
- heightSegments
- depthSegments

Subdivisions correspond to how much triangles should compose the face.

### Creating your own buffer geometry

If the geometry is very complex or with a precise shape, it's better to create it in a 3D software. but if the geometry isn't too complex, we can build it ourself by using BufferGeometry.

- Using Float32Array
- Using BufferAttribute as position and Using BufferGeometry

> **Index**
> One interesting thing with BufferGeometry is that you can mutualize vertices using the index property.

## Debug UI

Using [lil-gui](https://lil-gui.georgealways.com/)
