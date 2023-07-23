function getRandomColor(){
    let array = ['123457890abcdef']
    let newarray = array.join('').split('')

    let string ="#"

    for(let i=0; i<6;i++){
        let random = Math.round(Math.random()*15)
        string += newarray[random] 
    }

    return string
}

function getInitials(name = 'Tere Wadil') {
    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials ;
  }
  
  function createAvatar(name, size) {
    let ColorNow = getRandomColor();
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
  
    const context = canvas.getContext('2d');
    context.fillStyle = ColorNow;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = `bold ${size / 2.5}px 'Lucida Sans Regular'`;
    context.textAlign = 'center';
    context.fillStyle = '#ffffff';
    context.fillText(getInitials(name), size / 2, size / 1.5);
    return { image: canvas.toDataURL(), AvatarColor: ColorNow }

  }

  function isNumber(value){
    let regex = /^[+-]?\d+$/
    let validateVal = value == "" || (!regex.test(value) && !Number(value)) ? false : value;

    return validateVal

  }