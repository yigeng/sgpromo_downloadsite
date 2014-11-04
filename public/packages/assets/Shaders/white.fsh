#ifdef GL_ES
precision mediump float;
#endif

// 1
varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
uniform sampler2D u_texture;

uniform vec2 center;
uniform vec2 resolution;

uniform vec2 v_p1;
uniform vec2 v_p2;
uniform int b_inside;
uniform vec4 v_color;

void main()
{
    if (gl_FragCoord.x>v_p1.x&&gl_FragCoord.x<v_p2.x&&gl_FragCoord.y>v_p1.y&&gl_FragCoord.y<v_p2.y) {
        gl_FragColor=vec4(.0, .0, .0, .0);
    }
    else {
        gl_FragColor=v_color;
    }
}