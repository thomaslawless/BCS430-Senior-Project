exports.EnrollMember = async () => {
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

    const ccNumber = await prompts({
        type: 'text',
        name: 'value',
        message: 'Credit Card Number',
    });

    const ccExpiration = await prompts({
        type: 'text',
        name: 'value',
        message: 'Expiration',
    });

    const ccSecurityCode = await prompts({
        type: 'text',
        name: 'value',
        message: 'CVV',
    });

    let memberID = Math.floor(Math.random() * 999999);
    console.log(`Member #${memberID} Enrolled!`);

    return {
        memberID: memberID,
        first: FirstName.value.toLowerCase(),
        last: LastName.value.toLowerCase(),
        address: Address.value.toLowerCase(),
        city: City.value.toLowerCase(),
        state: State.value.toLowerCase(),
        zip: Zip.value.toLowerCase(),
        phone: Phone.value.toLowerCase(),
        email: Email.value.toLowerCase(),
        ccNumber: ccNumber.value.toLowerCase(),
        ccExpiration: ccExpiration.value.toLowerCase(),
        ccSecurityCode: ccSecurityCode.value.toLowerCase(),
    }
}