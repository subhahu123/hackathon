var container, camera, scene, renderer;



init();
animate();

function init() {

    container = document.createElement('div');
    document.body.appendChild(container);
    container.className = "container";

    // renderer

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    container.appendChild(renderer.domElement);

    // scene

    scene = new THREE.Scene();

    // camera

    camera = new THREE.PerspectiveCamera(10, 0.7, 0.1, 10000);
    camera.position.set(300, 500, 300);
    scene.add(camera); // required, because we are adding a light as a child of the camera

    // lights

    scene.add(new THREE.AmbientLight(0x222222));

    var light = new THREE.PointLight(0xffffff, 0.8);
    camera.add(light);

    // object

    var loader = new THREE.STLLoader();
    loader.load('http://192.168.0.118:8080/dl/2019100917475340157229171628', function (geometry) {

        console.log(geometry)

        var material = new THREE.MeshPhongMaterial({
            color: 0xff5533
        });

        var mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

    });

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    var timer = Date.now() * 0.0005;

    camera.position.x = Math.cos(timer) * 5;
    camera.position.z = Math.sin(timer) * 5;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);

}





function changeCameraPosition() {

    var firstCamera = document.querySelector('#firstCamera');
    var secondCamera = document.querySelector('#secondCamera');
    var thirdCamera = document.querySelector('#thirdCamera');

    console.log(firstCamera.value);
    console.log(secondCamera.value);

    console.log(thirdCamera.value);

    
    camera.position.set(firstCamera.value, secondCamera.value, thirdCamera.value);

}