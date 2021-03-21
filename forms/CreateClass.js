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
// DateTime variable??
    const timeDate = await prompts({
        type: 'text',
        name: 'value',
        message: 'Date and Time of Class',
    });

    const sizeLimit = await prompts({
        type: 'int',
        name: 'value',
        message: 'Limit of class',
    });


    let classID = Math.floor(Math.random() * 999999);
    console.log(`Class #${classID} Created!`);

    return {
        classID: classID,
        instructor: instructor.value.toLowerCase(),
        timeDate: timeDate.value.toLowerCase(),
    }
}