/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage } }) => {

    const projects = [
        {
            id: 1,
            title: 'Smart Cart',
            description: 'UI Design',
            about: 'Stuff',
            role: 'Designer and Developer',
            items: [
                {
                    thumbnail: '',
                    image: '',
                    title: '',
                    alt: ''
                },
                {
                    thumbnail: '',
                    image: '',
                    title: '',
                    alt: ''
                }
            ]
        },
        // {
        //     id: 2,
        //     title: 'British Airways',
        //     description: 'UI Design',
        //     about: 'Stuff',
        //     role: 'Designer and Developer',
        //     items: [
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         },
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         }
        //     ]
        // },
        // {
        //     id: 3,
        //     title: 'Ford Fusion - Car Dashboard',
        //     description: 'UI Design',
        //     about: 'Stuff',
        //     role: 'Designer and Developer',
        //     items: [
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         },
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         }
        //     ]
        // },
        // {
        //     id: 4,
        //     title: 'Zane Barles',
        //     description: 'Branding',
        //     about: 'Stuff',
        //     role: 'Designer and Developer',
        //     items: [
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         },
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         }
        //     ]
        // },
        // {
        //     id: 5,
        //     title: 'Musicbook',
        //     description: 'Branding',
        //     about: 'Stuff',
        //     role: 'Designer and Developer',
        //     items: [
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         },
        //         {
        //             thumbnail: '',
        //             image: '',
        //             title: '',
        //             alt: ''
        //         }
        //     ]
        // }
    ];

    // Create portfolio page
    createPage({
        path: `/portfolio`,
        component: require.resolve('./src/templates/portfolio.js'),
        context: { projects }
    });

    // Create list of portfolio pages
    projects.forEach(project => {
        createPage({
            path: `/portfolio/${project.id}`,
            component: require.resolve('./src/templates/portfolio-details.js'),
            context: { project }
        });
    });

};