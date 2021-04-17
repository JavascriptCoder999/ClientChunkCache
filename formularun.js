switch
case 1:
//boolean logic
if($this.isKeyPressed(Keys.a)){
$this.moveX(-100)
}
default:
case 2:
if($this.isKeyPressed(Keys.d)){
$this.moveX(100)
}
default:
case 3:
if($this.isKeyPressed(Keys.w)){
$this.moveY(100)
}
default:
case 4:
if($this.isKeyPressed(Keys.s)){
$this.moveY(-100)
}
