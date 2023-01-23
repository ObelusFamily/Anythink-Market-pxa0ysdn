const generateAvatar = (username) =>{
    const size = 100
    const canvas = document.createElement('canvas')
    canvas.height=size;
    canvas.width=size;
    const context = canvas.getContext('2d')

    const text = username.slice(0,2).toUpperCase();
    context.fillStyle = "#292929";
    context.fillRect(0, 0, size, size);
    context.font = "bold 56px Menlo";

    const textWidth = context.measureText(text).width;
    context.fillStyle = "#fff";
    context.fillText(text, (size - textWidth) / 2, (size + 42) / 2);

    const regx = /^data:.+\/(.+);base64,(.*)$/

    return canvas.toDataURL('image/png').match(regx)[2];
}

export default generateAvatar