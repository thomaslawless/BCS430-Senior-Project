exports.JoinClass = async () => {
    const prompts = require('prompts');

    const ClassID = await prompts({
        type: 'text',
        name: 'value',
        message: 'Class ID',
    });

    const MemberID = await prompts({
        type: 'text',
        name: 'value',
        message: 'Member ID',
    });

    return {
        ClassID: ClassID.value,
        MemberID: MemberID.value
    }
}