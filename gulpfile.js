var requireDir = require('require-dir');

// require all tasks in /gulp/tasks, recursively
requireDir('./gulp/tasks', { recurse: true });