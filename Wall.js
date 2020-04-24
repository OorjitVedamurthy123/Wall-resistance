class Wall{
    constructor(thickness){
      this.x = 1300;
      this.y = 400;  
      this.thickness = thickness;
      this.sprite = createSprite(this.x,this.y,this.thickness,1000);
      this.sprite.shapeColor = color(230,230,230);
    }
}