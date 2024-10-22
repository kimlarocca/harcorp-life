export async function sendContactForm( userName, userMessage, userEmail, userPhone ) {
    let msg = {
        personalizations: [ {
            to: [ {
                email: 'info@harcorplife.com',
                name: 'HarcorpLife.com',
            }, ],
        }, ],
        from: {
            email: 'kim@4siteusa.com',
            name: 'HarcorpLife.com',
        },
        subject: 'New Contact Form Submission From HarcorpLife.com!',
        content: [ {
                type: 'text/plain',
                value: 'New Contact Form Submission! User Email: ' + userEmail + ' Name: ' + userName + ' Phone: ' + userPhone + ' Message: ' + userMessage + '',
            },
            {
                type: 'text/html',
                value: `<h1>New Contact Form Submission!</h1><p>User Email: ${userEmail}</p><p>Name: ${userName}</p><p>Phone: ${userPhone}</p><p>Message: ${userMessage}</p>`,
            },
        ],
    }
    const {
        data
    } = await useFetch( '/api/sendgrid', {
        method: 'POST',
        body: msg,
    } )
}