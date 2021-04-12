exports.CreateClass = async () => {
    const prompts = require('prompts');

    const className = await prompts({
        type: 'text',
        name: 'value',
        message: 'Class Name',
    });

    const instructor = await prompts({
        type: 'text',
        name: 'value',
        message: 'Instructor',
    });

    const date = await prompts({
        type: 'text',
        name: 'value',
        message: 'Date of Class',
    });

    const time = await prompts({
        type: 'text',
        name: 'value',
        message: 'Time of Class',
    });

    const sizeLimit = await prompts({
        type: 'number',
        name: 'value',
        message: 'Limit of class',
    });

    let classID = Math.floor(Math.random() * 999999);
    console.log(`Class #${classID} Created!`);

    return {
        classID: classID,
        className: className.value.toLowerCase(),
        instructor: instructor.value.toLowerCase(),
        date: date.value.toLowerCase(),
        time: time.value.toLowerCase(),
        sizeLimit: sizeLimit.value,
        enrolledMembers: []
    }
}