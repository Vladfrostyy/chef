const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

let air_pods_model = document.querySelector(".home__model");

function model(set_model_directory, model_local_directory, perspectiveCamera, camera_y, a_light, a_light_op, p_light, p_light_op) {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(perspectiveCamera, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40;
    camera.position.y = camera_y
    let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0xf0d98e, 1);
    renderer.setSize(1920, 720);
    renderer.domElement.setAttribute('id', "Model");
    renderer.setClearColor( 0x000000, 0 );
    set_model_directory.appendChild(renderer.domElement, document.body.firstChild);

    const aLight = new THREE.AmbientLight(a_light, a_light_op);
    aLight.position.set(10, 7, 7);
    scene.add(aLight);
    const pLight = new THREE.PointLight(p_light, p_light_op);
    pLight.position.set(10, 50, 70);
    scene.add(pLight);

    let loader = new THREE.GLTFLoader();
    let obj = null;

    loader.load(model_local_directory, function (gltf) {
        const calizStella_mat = new THREE.MeshPhysicalMaterial({
            metalness: .9,
            roughness: .05,
            envMapIntensity: 0.9,
            clearcoat: 1,
            transparent: true,
            // transmission: .95,
            opacity: .5,
            reflectivity: 0.2,
            refractionRatio: 0.985,
            ior: 0.9,
            side: THREE.BackSide,
            })
        obj = gltf;
        obj.scene.scale.set(1.2,2, 1.5);
        obj.scene.rotation.x = 1.5
        scene.add(obj.scene);
    });


    function animate(e) {
        requestAnimationFrame(animate);
        if (obj) {

            obj.scene.rotation.y = 0;
            $(window).scroll(function () {
                if (obj.scene.rotation.x > 0) {
                    obj.scene.rotation.x = -window.scrollY / 200 + 1.5; 
                }
                
                if (window.scrollY >= 860) {
                    const element = document.querySelector(".home__model");
                    element.classList.add("active");
                } else {
                    const element = document.querySelector(".home__model");
                    element.classList.remove("active");
                }
            })

            renderer.render(scene, camera);
        }
    }
    
    let rotate = 2;
    console.log(rotate);
    
    function animate2(e) {
        requestAnimationFrame(animate2);

        rotate += 0.009
        
        if (obj) {
            obj.scene.scale.set(1.4,2.2, 1.4);
            obj.scene.rotation.z = 0;
            obj.scene.rotation.y = rotate; 

            renderer.render(scene, camera);
        }
    }

    animate();
    animate2()
}

// Your Models, Your Settings

model(air_pods_model, '../models/jar.gltf', 20, 0, 0x333333, 1, 0xffffff, 1);

const sliderButtons = document.querySelectorAll(".butt");
const modell = document.querySelector(".home__model");

let isShow = true;

sliderButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
        isShow = !isShow;

        if (isShow) {
            modell.classList.remove("show");
        } else {
            modell.classList.add("show");
        }
    })
})

const button1 = document.querySelector(".home__button");
const scrollBlock1 = document.querySelector(".about");

button1.addEventListener("click", (e) => {
    scrollBlock1.scrollIntoView({behavior: 'smooth'});
})

const button2 = document.querySelector(".about__button");
const scrollBlock2 = document.querySelector(".jags");

button2.addEventListener("click", (e) => {
    scrollBlock2.scrollIntoView({behavior: 'smooth'});
})