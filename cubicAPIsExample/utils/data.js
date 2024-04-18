//* Meta data required to access, upload, retrieve or delete a file, folder in the delivery Cubic .
//* Change the values to the values that coresponds with the content-delivery cubic you wish to access

const globalCubicVars = {
    cubicId: "",
    cubicName: ""
}

const obj = {
    cubicId: globalCubicVars.cubicId, // The id of the content delivery cubic you wish to access, to find id use getAllCubics method first.
    cubicName: globalCubicVars.cubicName, // The name of the cubic you wish to access.
    sectionName: "image", // The type of folder you want to access in a section eg: image, video, music, files.
    sectionTitle: "Singles", // The type of folder you want to access in a section " Singles, folders".
}

const objFolder = {
    //userId: "",
    cardId: globalCubicVars.cubicId, // The id of the content delivery cubic you wish to access, to find id use getAllCubics method first.
    cardName: globalCubicVars.cubicName, // The name of the cubic you wish to access.
    sectionName: "image", // The type of folder you want to access in a section eg: image, video, music, files.
    sectionTitle: "folders", // The type of folder you want to access in a section " Singles, folders".
    folderName: "", // The name of the folder in the cubic section of folders you wish to access.
    folderId: "", // The id of the folder in the cubic section of folders you wish to access.
}

const objDelFile = {
    cubicId: globalCubicVars.cubicId, // The id of the content delivery cubic you wish to access, to find id use getAllCubics method first.
    cubicName: globalCubicVars.cubicName, // The name of the cubic you wish to access.
    sectionName: "image", // The type of folder you want to access in a section eg: image, video, music, files.
    sectionTitle: "Singles", // The type of folder you want to access in a section " Singles, folders".
    fileName: "", // The name of the file (filename on file object) you wish to delete in cubic folder.
}

const objDelFolderFile = {
    cubicId: globalCubicVars.cubicId, // The id of the content delivery cubic you wish to access, to find id use getAllCubics method first.
    cubicName: globalCubicVars.cubicName, // The name of the cubic you wish to access.
    sectionName: "image", // The type of folder you want to access in a section eg: image, video, music, files.
    folderName: "", // The name of the folder in the cubic section of folders you wish to access.
    folderId: "", // The id of the folder in the cubic section of folders you wish to access.
    fileName: "", // The name of the file (filename on file object) you wish to delete in cubic folder.
}

const createFolderObject = {
    cubicId: globalCubicVars.cubicId, // The id of the content delivery cubic you wish to access, to find id use getAllCubics method first.
    cubicName: globalCubicVars.cubicName, // The name of the cubic you wish to access.
    sectionName: 'image', // The type of folder you want to access in a section eg: image, video, music, files.
    folderName: '' // The name of the folder in the cubic section of folders you wish to access.
}

const deleteFolderObject = {
    cubicId: globalCubicVars.cubicId, // The id of the content delivery cubic you wish to access, to find id use getAllCubics method first.
    cubicName: globalCubicVars.cubicName, // The name of the cubic you wish to access.
    sectionName: 'image', // The type of folder you want to access in a section eg: image, video, music, files.
    folderName: '', // The name of the folder in the cubic section of folders you wish to access.
    folderId: "" // The id of the folder in the cubic section of folders you wish to access.
}




//* Files Array, change the values with files that are in your system.
//* Depending on the system you use make sure your file paths are correct.
const files = [
    { // Example file object
        originalFilename: 'StreamOBS.jpg',
        size: 45056, // in kilobyte
        filepath: '/home/user/images/StreamOBS.jpg',
        mimetype: 'image/jpeg',
        originalname: 'StreamOBS.jpg'
    },
    {
        originalFilename: '',
        size: 0,
        filepath: '',
        mimetype: '',
        originalname: ''
    }
];















// Export
export {
    obj,
    objFolder,
    objDelFile,
    objDelFolderFile,
    createFolderObject,
    deleteFolderObject,
    files,
}