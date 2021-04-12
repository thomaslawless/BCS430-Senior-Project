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

    const Membership = await prompts(
        {
          type: 'select',
          name: 'value',
          message: 'Membership',
          choices: [
            { title: 'Level 1', description: '$19.99 | Access to our extensive weight room', value: 'level_1' },
            { title: 'Level 2', description: '$29.99 | (Level 1) + Three free classes per month', value: 'level_2' },
            { title: 'Level 3', description: '$44.99 | (Level 2) + Unlimited free classes / Unlimited guess passes', value: 'level_3' }
          ],
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

    // let classAllowance = 0
    // if (Membership.value.toLowerCase() == 'level_2') {
    //     classAllowance = 3;
    // } else if (Membership.value.toLowerCase() == 'level_3') {
    //     classAllowance = 999;
    // }

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
        membership: Membership.value.toLowerCase(),
        classAllowance: 0,
        ccNumber: ccNumber.value.toLowerCase(),
        ccExpiration: ccExpiration.value.toLowerCase(),
        ccSecurityCode: ccSecurityCode.value.toLowerCase(),
        balance: 0,
    }
}