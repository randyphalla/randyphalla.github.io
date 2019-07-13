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
            title: 'Project 1',
            description: 'UI Design'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'UI Design'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'UI Design'
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'UI Design'
        }
    ];

    createPage({
        path: `/portfolio`,
        component: require.resolve('./src/templates/portfolio.js'),
        context: { projects }
    });

    projects.forEach(project => {
        createPage({
            path: `/portfolio/${project.id}`,
            component: require.resolve('./src/templates/portfolio-details.js'),
            context: { project }
        })
    })

};