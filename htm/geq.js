function gz(x,y,p,wa,wb,wc,b,z1,b1,m1){
	e = [0,0];
	wa = wa*100;
	wb = wb*1;
	wc = wc*1;
	for(o=0;o<p.length;o++){
	   w = wa*p[o][3]+wb*p[o][4];
	   z = (p[o][0]-x)*(p[o][0]-x)+(p[o][1]-y)*(p[o][1]-y);
	   z = Math.sqrt(z);
	   if(z<b1) z = b1;

	   wx = (p[o][0]-x)/z;
	   wy = (p[o][1]-y)/z;

	   z = z*z;
	   e[0] = e[0] - wx*w/(Math.pow(z,z1))*m1*10;
	   e[1] = e[1] - wy*w/(Math.pow(z,z1))*m1*10;
	}

	for(m=0;m<b.length;m++){
	   w = wc*b[m][2]
	   z = (b[m][0]-x)*(b[m][0]-x)+(b[m][1]-y)*(b[m][1]-y);
	   z = Math.sqrt(z);
	   if(z<1) z = 1;

	   wx = (b[m][0]-x)/z;
	   wy = (b[m][1]-y)/z;
	   z = z*z;
	   e[0] = e[0] - wx*w/(Math.pow(z,z1))*m1*10;
	   e[1] = e[1] - wy*w/(Math.pow(z,z1))*m1*10;
	}

	return e;
}