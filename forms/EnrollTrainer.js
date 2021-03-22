exports.EnrollTrainer = async () => {
    const prompts = require('prompts');

    const FirstName = await prompts({
        type: 'text',
        name: 'value',
        message: 'First Name',
    });

    const LastName = await prompts({
        type: 'text',
        name: 'value',
        message: 'Last Name',
    });

    const Address = await prompts({
        type: 'text',
        name: 'value',
        message: 'Address',
    });

    const City = await prompts({
        type: 'text',
        name: 'value',
        message: 'City',
    });

    const State = await prompts({
        type: 'text',
        name: 'value',
        message: 'State',
    });

    const Zip = await prompts({
        type: 'text',
        name: 'value',
        message: 'Zipcode',
    });

    const Phone = await prompts({
        type: 'text',
        name: 'value',
        message: 'Phone Number',
    });

    const Email = await prompts({
        type: 'text',
        name: 'value',
        message: 'Email',
    });

    let trainerID = Math.floor(Math.random() * 999999);
    console.log(`Trainer #${trainerID} Enrolled!`);

    return {
        trainerID: trainerID,
        first: FirstName.value.toLowerCase(),
        last: LastName.value.toLowerCase(),
        address: Address.value.toLowerCase(),
        city: City.value.toLowerCase(),
        state: State.value.toLowerCase(),
        zip: Zip.value.toLowerCase(),
        phone: Phone.value.toLowerCase(),
        email: Email.value.toLowerCase()
    }
}