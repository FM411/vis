function gz(x,y,p,wa,wb,wc){
	e = [0,0];
	for(o=0;o<p.length;o++){
	   w = wa*p[o][2]+wb*p[o][3]+wc*p[o][4];
	   z = (p[o][0]-x)*(p[o][0]-x)+(p[o][1]-y)*(p[o][1]-y);
	   z = Math.sqrt(z);
	   if(z<0.01) z = 0.01;

	   wx = (p[o][0]-x)/z;
	   wy = (p[o][1]-y)/z;
	   e[0] = e[0] - wx*w/(z*z*z);
	   e[1] = e[1] - wy*w/(z*z*z);
	}

	return e
}