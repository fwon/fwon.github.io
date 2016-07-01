/**
 * 敌人粒子类
 */

import map from './Map';
import Point from './Point';

export default class Enemy extends Point {
    
    constructor(options) {
        super(options);
        this.radius = Math.random() * 2 + 3;
        this.color = "red";
        this.speed = options.speed || Math.random() * 1 + 0.5;
        this.type = options.type || 'normal';
        this.ratio = window.innerHeight / window.innerWidth;
    }

    update() {
        this.x -= this.speed;
        this.y += this.speed;
        
        // if (this.x < -10 || this.y > map.height + 10)  {
        //     this.x = Math.random() * map.width + map.width;
        //     this.y = -Math.random() * map.height;
        // }
        if (this.x < -10) {
            this.x = map.width + 10;
        }
        if (this.y > map.height + 10) {
            this.y = -10;
        }
    }

    speedUp(speed) {
        this.speed += speed || 0.2;
    }

    speedDown(speed) {
        let _speed = speed || 0.8
        if (this.speed > _speed) this.speed -= _speed;
    }

    minimize(size) {
        let _size = size || 2;
        if (this.radius > _size) this.radius -= _size;
    }

    magnify(size) {
        this.radius += size || 2;
    }

    //躲避player
    escape(player) {
        let angle = Math.atan(Math.abs(player.y - this.y) / Math.abs(player.x - this.x));
        let addX = (player.gravityRadius) * Math.cos(angle);
        let addY = (player.gravityRadius) * Math.sin(angle);

        // if (this.x > player.x) {
        //     this.x = player.x + addX;
        // } else {
        //     this.x = player.x - addX;    
        // }

        // if (this.y > player.y) {
        //     this.y = player.y + addY;    
        // } else {
        //     this.y = player.y - addY;    
        // }
        
        if (this.x > player.x && this.x < player.x + addX) {
            this.x += this.speed * 2;
        } else if (this.x < player.x && this.x > player.x - addX) {
            this.x -= this.speed * 2;    
        }

        if (this.y > player.y && this.y < player.y + addY) {
            this.y += this.speed;
        } else if (this.y < player.y && this.y > player.y - addY) {
            this.y -= this.speed;    
        }
        
    }

    render() {
        var s = this;

        map.ctx.beginPath();

        map.ctx.fillStyle = s.color;
        map.ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2, false);
        map.ctx.fill();

    }
}