"use client";

import { useEffect, useRef, useState } from "react";

const fov = 250;
const particle_distance_top = 10;
const speed = 0.125;

let image_data: any = null;
let data: any = null;
let particles: any = null;

window.requestAnimationFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

const Component = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    const [audio, set_audio] = useState<any>(null);

    useEffect(() => {
        if (!ref.current) return;

        const canvas = ref.current;
        const context = canvas.getContext("2d", { willReadFrequently: true });

        if (!context) return;

        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        const center = { x: width / 2, y: height / 2 };

        canvas.height = height;
        canvas.width = width;

        context.fillStyle = "#1c1917";
        context.fillRect(0, 0, width, height);

        image_data = context.getImageData(0, 0, width, height);
        data = image_data.data;

        particles = get_particles();

        render(center, height, particles, width);

        context.putImageData(image_data, 0, 0);

        const animate = () => {
            for (var i = 0, l = data.length; i < l; i += 4) {
                data[i] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;
                data[i + 3] = 255;
            }

            render(center, height, particles, width);

            context.putImageData(image_data, 0, 0);

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    const draw_line = (image_data: any, height: number, width: number, x1: number, y1: number, x2: number, y2: number, r: number, g: number, b: number, a: number) => {
        var dx = Math.abs(x2 - x1);
        var dy = Math.abs(y2 - y1);

        var sx = x1 < x2 ? 1 : -1;
        var sy = y1 < y2 ? 1 : -1;

        var err = dx - dy;

        var lx = x1;
        var ly = y1;

        while (true) {
            if (lx > 0 && lx < width && ly > 0 && ly < height) {
                const i = (lx + ly * image_data.width) * 4;

                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = b;
                data[i + 3] = a;
            }

            if (lx === x2 && ly === y2) break;

            var e2 = 2 * err;

            if (e2 > -dx) {
                err -= dy;
                lx += sx;
            }

            if (e2 < dy) {
                err += dx;
                ly += sy;
            }
        }
    };

    const get_particles = () => {
        const audio_buffer_index_min = 8;
        const audio_buffer_index_max = 512;
        let audio_buffer_index = audio_buffer_index_min;

        const particles = [];

        for (let z = -fov; z < fov; z += 5) {
            const row = [];

            for (let x = -fov; x < fov; x += 5) {
                const y = Math.random() * 5 + particle_distance_top;

                const particle = {
                    x,
                    y,
                    z,
                    x2d: 0,
                    y2d: 0,
                    index: audio_buffer_index,
                };

                row.push(particle);

                audio_buffer_index++;

                if (audio_buffer_index > audio_buffer_index_max) {
                    audio_buffer_index = audio_buffer_index_min;
                }
            }

            particles.push(row);
        }

        return particles;
    };

    const render = (center: any, height: any, particles: any, width: any) => {
        let sort_array = false;

        for (var i = 0, l = particles.length; i < l; i++) {
            const particles_row = particles[i];
            const particles_row_back = i > 0 ? particles[i - 1] : null;

            for (var j = 0, k = particles_row.length; j < k; j++) {
                const particle = particles_row[j];

                const scale = fov / (fov + particle.z);

                particle.x2d = particle.x * scale + center.x;
                particle.y2d = particle.y * scale + center.y;
                particle.z -= speed;

                if (particle.z < -fov) {
                    particle.z += fov * 2;

                    sort_array = true;
                }

                const line_colour_value = Math.round((i / l) * 255);

                if (j > 0) {
                    const p = particles_row[j - 1];

                    draw_line(image_data, height, width, particle.x2d | 0, particle.y2d | 0, p.x2d | 0, p.y2d | 0, line_colour_value, 0, 0, 255);
                }

                if (i > 0 && i < l - 1 && particles_row_back?.[j]) {
                    const pB = particles_row_back[j];

                    draw_line(image_data, height, width, particle.x2d | 0, particle.y2d | 0, pB.x2d | 0, pB.y2d | 0, line_colour_value, 0, 0, 255);
                }
            }
        }

        if (sort_array) {
            particles = particles.sort((a: any, b: any) => b[0].z - a[0].z);
        }
    };

    return <canvas ref={ref} />;
};

export default Component;
