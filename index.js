const reverseGraph = {
    'ui-feat-a': [
        {
            type: 'static',
            source: 'ui-feat-a',
            target: 'foo-rwc'
        },
        {
            type: 'static',
            source: 'ui-feat-a',
            target: 'bar-rwc'
        }
    ],
    'public-ui-assets': [],
    'public-ui-styles': [
        {
            type: 'implicit',
            source: 'public-ui-styles',
            target: 'foo-rwc'
        },
        {
            type: 'implicit',
            source: 'public-ui-styles',
            target: 'bar-rwc'
        }
    ],
    'foo-rwc-e2e': [],
    'bar-rwc-e2e': [],
    'foo-rwc': [
        {
            type: 'implicit',
            source: 'foo-rwc',
            target: 'foo-rwc-e2e'
        }
    ],
    'bar-rwc': [
        {
            type: 'implicit',
            source: 'bar-rwc',
            target: 'bar-rwc-e2e'
        }
    ]
};

/*
    Visiting all nodes - desired output when starting with ui-feat-a
    ======================================================================
    1. foo-rwc-e2e
    2. bar-rwc-e2e
    3. foo-rwc
    4. bar-rwc
    5. ui-feat-a
 */

const entryProject = 'ui-feat-a';

function traverse(project) {
    const deps = reverseGraph[project];

    if(deps.length > 0){
        deps.forEach(dep => {
            traverse(dep.target);
        });
        console.log(`Deleting ${project}`);
    } else {
        console.log(`Deleting ${project}`);
    }
}

traverse(entryProject);
