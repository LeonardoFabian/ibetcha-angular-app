export function toBase64(file: File) {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    // read file
    reader.readAsDataURL(file);

    // retrieve the result
    reader.onload = () => resolve(reader.result);

    // manage error
    reader.onerror = (error) => reject(error);

  })

}
