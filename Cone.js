function cone(radius,height) {
    let volume=Math.PI*radius*radius*height/3;
    let s=Math.sqrt(radius*radius+height*height);
    let totalSurface=Math.PI*radius*(radius+s);
    console.log("volume = " + volume);
    console.log("area = " + totalSurface);
}
cone(3,5);