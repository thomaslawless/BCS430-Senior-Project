exports.ChangeMember = async () => {
    const prompts = require('prompts');

    const MemberID = await prompts({
        type: 'text',
        name: 'value',
        message: 'Member ID',
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

    return {
        MemberID: MemberID.value,
        Membership: Membership.value
    }
}