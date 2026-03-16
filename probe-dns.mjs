import dns from 'node:dns';

const host = 'db.zqamsvgrvllrmdaekqfb.supabase.co';
dns.lookup(host, (err, address, family) => {
  if (err) {
    console.error(`❌ DNS Lookup failed for ${host}:`, err.message);
    // Try without the 'db.' prefix just in case
    const altHost = 'zqamsvgrvllrmdaekqfb.supabase.co';
    dns.lookup(altHost, (err2, addr2) => {
        if (err2) console.error(`❌ DNS Lookup failed for ${altHost}:`, err2.message);
        else console.log(`✅ ${altHost} resolved to ${addr2}`);
    });
  } else {
    console.log(`✅ ${host} resolved to ${address}`);
  }
});
