import dns from 'node:dns';

const hosts = [
    'db.zqamsvgrvllrmdaekqfb.supabase.co',
    'db.zqamsvgrvllrmdaekqfb.supabase.com',
    'zqamsvgrvllrmdaekqfb.supabase.co',
    'zqamsvgrvllrmdaekqfb.supabase.com'
];

hosts.forEach(host => {
    dns.lookup(host, (err, address) => {
        if (err) console.log(`❌ ${host} failed: ${err.message}`);
        else console.log(`✅ ${host} -> ${address}`);
    });
});
