const { all, run } = require('./db');

async function test() {
  try {
    // Insert a sample user if none exist
    const users = await all('SELECT * FROM users LIMIT 1');
    if (users.length === 0) {
      await run('INSERT INTO users (name, email) VALUES (?, ?)', ['Alice', 'alice@example.com']);
      console.log('Inserted sample user Alice');
    } else {
      console.log('Users already exist, skipping insert');
    }

    const rows = await all('SELECT id, name, email FROM users');
    console.log('Current users:', rows);
  } catch (err) {
    console.error('DB test failed:', err);
    process.exit(1);
  }
}

test();
