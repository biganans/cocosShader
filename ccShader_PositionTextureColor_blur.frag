#ifdef GL_ES
precision highp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float hstep;
uniform float vstep;

void main(void) {
   vec4 sum = vec4(0.0);
   vec2 tc = v_texCoord;
   float blur = 1.0; 
	sum += texture2D(CC_Texture0, vec2(tc.x - 7.0*blur*hstep, tc.y - 7.0*blur*vstep)) * 0.0044299121055113265;
	sum += texture2D(CC_Texture0, vec2(tc.x - 6.0*blur*hstep, tc.y - 6.0*blur*vstep)) * 0.00895781211794;
	sum += texture2D(CC_Texture0, vec2(tc.x - 5.0*blur*hstep, tc.y - 5.0*blur*vstep)) * 0.0215963866053;
	sum += texture2D(CC_Texture0, vec2(tc.x - 4.0*blur*hstep, tc.y - 4.0*blur*vstep)) * 0.0443683338718;
	sum += texture2D(CC_Texture0, vec2(tc.x - 3.0*blur*hstep, tc.y - 3.0*blur*vstep)) * 0.0776744219933;
	sum += texture2D(CC_Texture0, vec2(tc.x - 2.0*blur*hstep, tc.y - 2.0*blur*vstep)) * 0.115876621105;
	sum += texture2D(CC_Texture0, vec2(tc.x - 1.0*blur*hstep, tc.y - 1.0*blur*vstep)) * 0.147308056121;
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y)) * 0.159576912161;
	sum += texture2D(CC_Texture0, vec2(tc.x + 1.0*blur*hstep, tc.y + 1.0*blur*vstep)) * 0.147308056121;
	sum += texture2D(CC_Texture0, vec2(tc.x + 2.0*blur*hstep, tc.y + 2.0*blur*vstep)) * 0.115876621105;
	sum += texture2D(CC_Texture0, vec2(tc.x + 3.0*blur*hstep, tc.y + 3.0*blur*vstep)) * 0.0776744219933;
	sum += texture2D(CC_Texture0, vec2(tc.x + 4.0*blur*hstep, tc.y + 4.0*blur*vstep)) * 0.0443683338718;
	sum += texture2D(CC_Texture0, vec2(tc.x + 5.0*blur*hstep, tc.y + 5.0*blur*vstep)) * 0.0215963866053;
	sum += texture2D(CC_Texture0, vec2(tc.x + 6.0*blur*hstep, tc.y + 6.0*blur*vstep)) * 0.00895781211794;
	sum += texture2D(CC_Texture0, vec2(tc.x + 7.0*blur*hstep, tc.y + 7.0*blur*vstep)) * 0.0044299121055113265;
	gl_FragColor = sum;	
}