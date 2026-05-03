let lastPostedItem = null;
const MY_NAME     = 'You';
const MY_HANDLE   = 'you@newschool.edu';

const BUILDINGS = {
  'Kaplan Hall': {
    addr: '66 W 12th St',
    items: [
      { id: 1,  type: 'found', title: 'Black Wallet Found',   loc: 'Kaplan Hall – 5th floor',    time: '2 hours ago',  what: 'A black wallet with a few cards, a photograph, and some personal items.', where: 'Near the elevator on the 5th floor of Kaplan Hall.', when: 'March 20th, 2026 around 8pm', email: 'joey123@newschool.edu' },
      { id: 2,  type: 'lost',  title: 'AirPods Case Lost',    loc: 'Kaplan Hall – Class 407',    time: '14 hours ago', what: 'White AirPods Pro case, second generation. Has a small scratch on the lid.', where: 'Left in classroom 407.', when: 'Today around 2pm', email: 'anon@newschool.edu' },
      { id: 3,  type: 'found', title: 'Jacket Found',         loc: 'Kaplan Hall – Lecture Hall', time: 'Yesterday',    what: 'A dark navy zip-up hoodie, size M, left on a chair.', where: 'Lecture hall on 3rd floor.', when: 'Yesterday evening', email: 'anon@newschool.edu' },
    ]
  },
  'University Center': {
    addr: '55 W 13th St',
    items: [
      { id: 7,  type: 'found', title: 'Laptop Charger Found', loc: 'University Center – 6th floor', time: '1 hour ago',  what: 'MacBook Pro charger, USB-C, 96W. Left on a table.', where: '6th floor study lounge by the windows.', when: 'Today around 11am', email: 'finder@newschool.edu' },
      { id: 8,  type: 'lost',  title: 'Student ID Lost',      loc: 'University Center – Cafeteria', time: '5 hours ago', what: 'New School student ID card, name on front.', where: 'Cafeteria area, possibly near the checkout.', when: 'Today around 1pm', email: 'anon@newschool.edu' },
      { id: 9,  type: 'found', title: 'Blue Scarf Found',     loc: 'University Center – Lobby',    time: 'Yesterday',   what: 'Soft blue knit scarf, medium length.', where: 'Main lobby near the entrance.', when: 'Yesterday evening', email: 'anon@newschool.edu' },
      { id: 10, type: 'lost',  title: 'Headphones Lost',      loc: 'University Center – Library',  time: '2 days ago',  what: 'Sony WH-1000XM4 black over-ear headphones.', where: 'Library on 3rd floor, quiet zone.', when: 'Monday afternoon', email: 'anon@newschool.edu' },
    ]
  },
  'Arnhold Hall': {
    addr: '55 W 13th St',
    items: [
      { id: 11, type: 'lost',  title: 'Dance Bag Lost', loc: 'Arnhold Hall – Studio B', time: '2 hours ago', what: 'Black duffel bag with dance shoes and a water bottle inside.', where: 'Studio B changing area.', when: 'Today around 3pm', email: 'dancer@newschool.edu' },
      { id: 12, type: 'found', title: 'Phone Found',    loc: 'Arnhold Hall – Lobby',    time: '6 hours ago', what: 'iPhone 14, black case with a sticker on the back.', where: 'Main lobby near the seating area.', when: 'Today around 10am', email: 'anon@newschool.edu' },
      { id: 13, type: 'lost',  title: 'Jacket Lost',   loc: 'Arnhold Hall – Studio A', time: 'Yesterday',   what: 'Olive green zip-up jacket, size S, from Uniqlo.', where: 'Studio A coat hooks.', when: 'Yesterday morning', email: 'anon@newschool.edu' },
    ]
  },
  'Loeb Hall': {
    addr: '100 Greenwich Ave',
    items: [
      { id: 16, type: 'lost',  title: 'Keys Lost',      loc: 'Loeb Hall – Laundry Room', time: '3 hours ago', what: 'Set of keys with a red keychain and a small Parsons lanyard.', where: 'Laundry room on basement level.', when: 'This morning', email: 'resident@newschool.edu' },
      { id: 17, type: 'found', title: 'Umbrella Found', loc: 'Loeb Hall – Entrance',     time: 'Yesterday',   what: 'Black compact umbrella, found propped by the front door.', where: 'Main entrance area.', when: 'Yesterday evening', email: 'anon@newschool.edu' },
      { id: 18, type: 'lost',  title: 'Earbuds Lost',   loc: 'Loeb Hall – Common Room',  time: '2 days ago',  what: 'AirPods Pro, 2nd gen, white case with initials written in marker.', where: 'Common room couch area.', when: 'Sunday night', email: 'anon@newschool.edu' },
    ]
  },
  'Stuyvesant Park Apts': {
    addr: '345 E 15th St',
    items: [
      { id: 19, type: 'found', title: 'Tote Bag Found', loc: 'Stuyvesant Park – Mailroom',  time: '5 hours ago', what: 'Canvas tote bag with books and a pencil case inside.', where: 'Mailroom near the package lockers.', when: 'Today around noon', email: 'anon@newschool.edu' },
      { id: 20, type: 'lost',  title: 'Bike Lock Lost', loc: 'Stuyvesant Park – Basement', time: '1 day ago',   what: 'Kryptonite U-lock, black, with the key.', where: 'Bike storage in basement.', when: 'Yesterday', email: 'anon@newschool.edu' },
    ]
  },
  'Union Square Residence': {
    addr: '25 Union Square W',
    items: [
      { id: 21, type: 'lost',  title: 'Textbook Lost',  loc: 'Union Square Residence – Study Room', time: '6 hours ago', what: '"Thinking with Type" by Ellen Lupton. Has sticky notes inside.', where: 'Study room on 4th floor.', when: 'Today afternoon', email: 'anon@newschool.edu' },
      { id: 22, type: 'found', title: 'Charger Found',  loc: 'Union Square Residence – Lobby',      time: '2 days ago',  what: 'USB-C phone charger cable, braided black.', where: 'Lobby charging station.', when: 'Saturday', email: 'anon@newschool.edu' },
    ]
  },
  '6 E 16th St': {
    addr: '6 E 16th St',
    items: [
      { id: 26, type: 'lost',  title: 'Portfolio Lost',   loc: '6 E 16th St – Elevator', time: '2 hours ago', what: 'Large black portfolio case, A2 size, with prints inside.', where: 'Near the elevator on ground floor.', when: 'Today around 9am', email: 'student@newschool.edu' },
      { id: 27, type: 'found', title: 'Coffee Mug Found', loc: '6 E 16th St – Kitchen',  time: '1 day ago',   what: 'White ceramic mug with a blue handle.', where: 'Kitchenette on 3rd floor.', when: 'Yesterday', email: 'anon@newschool.edu' },
    ]
  },
  '80 Fifth Ave': {
    addr: '80 Fifth Ave',
    items: [
      { id: 28, type: 'found', title: 'Gloves Found', loc: '80 Fifth Ave – Stairwell',    time: '3 hours ago', what: 'Pair of black leather gloves, size S/M.', where: 'Stairwell between floors 2 and 3.', when: 'This morning', email: 'anon@newschool.edu' },
      { id: 29, type: 'lost',  title: 'Tablet Lost',  loc: '80 Fifth Ave – Seminar Room', time: '1 day ago',   what: 'iPad Air, silver, with a grey folio case.', where: 'Seminar room on 5th floor.', when: 'Yesterday afternoon', email: 'anon@newschool.edu' },
    ]
  },
  'Sheila C. Johnson Design Center': {
    addr: '66 Fifth Ave',
    items: [
      { id: 56, type: 'found', title: 'Tote Bag Found',      loc: 'SCJDC – Gallery Level', time: '2 hours ago', what: 'Canvas tote with a sketchbook and some markers inside.', where: 'Gallery level seating area.', when: 'Today afternoon', email: 'anon@newschool.edu' },
      { id: 57, type: 'lost',  title: 'Portfolio Case Lost', loc: 'SCJDC – Elevator Area', time: '1 day ago',   what: 'Large black portfolio case, A1 size.', where: 'Near the elevator on ground floor.', when: 'Yesterday', email: 'student@newschool.edu' },
    ]
  },
  'Making Center': {
    addr: '2 W 13th St',
    items: [
      { id: 40, type: 'lost',  title: 'X-Acto Knife Set Lost', loc: 'Making Center – Workbench 4',  time: '1 hour ago',  what: 'Set of 3 X-Acto knives in a clear case.', where: 'Workbench area near the cutting mats.', when: 'Today around 2pm', email: 'anon@newschool.edu' },
      { id: 41, type: 'found', title: 'Apron Found',            loc: 'Making Center – Hook Wall',   time: '3 hours ago', what: 'Black canvas workshop apron, medium size.', where: 'Hanging on the hook wall near the entrance.', when: 'This morning', email: 'anon@newschool.edu' },
      { id: 42, type: 'lost',  title: 'USB Drive Lost',         loc: 'Making Center – CNC Station', time: 'Yesterday',   what: 'Small black USB drive with laser cut files on it.', where: 'CNC computer station.', when: 'Yesterday afternoon', email: 'student@newschool.edu' },
    ]
  },
  'Laser Lab': {
    addr: '2 W 13th St – B1',
    items: [
      { id: 43, type: 'found', title: 'Safety Goggles Found', loc: 'Laser Lab – Station 2',   time: '2 hours ago', what: 'Clear safety goggles left on the machine counter.', where: 'Laser cutter station 2.', when: 'Today', email: 'anon@newschool.edu' },
      { id: 44, type: 'lost',  title: 'Sketchbook Lost',      loc: 'Laser Lab – Entry Table', time: '1 day ago',   what: 'Small black sketchbook with laser cut patterns sketched inside.', where: 'Entry table near sign-in sheet.', when: 'Yesterday', email: 'anon@newschool.edu' },
    ]
  },
  'Woodshop': {
    addr: '2 W 13th St – B2',
    items: [
      { id: 45, type: 'found', title: 'Measuring Tape Found', loc: 'Woodshop – Tool Wall',      time: '4 hours ago', what: '25ft Stanley measuring tape, yellow.', where: 'Left on the tool wall shelf.', when: 'Today morning', email: 'anon@newschool.edu' },
      { id: 46, type: 'lost',  title: 'Work Gloves Lost',     loc: 'Woodshop – Sanding Area',  time: '2 days ago',  what: 'Pair of brown leather work gloves, size M.', where: 'Sanding and finishing area.', when: 'Monday', email: 'anon@newschool.edu' },
    ]
  },
  '3D Print Lab': {
    addr: '2 W 13th St – L1',
    items: [
      { id: 48, type: 'found', title: 'Printed Model Found', loc: '3D Print Lab – Pick-up Shelf',  time: '5 hours ago', what: 'White PLA 3D printed building facade model. Unclaimed for 3 days.', where: 'Pick-up shelf by the printer queue.', when: 'A few days ago', email: 'lab@newschool.edu' },
      { id: 49, type: 'lost',  title: 'Filament Spool Lost', loc: '3D Print Lab – Supply Cabinet', time: '1 day ago',   what: 'Partial spool of grey PLA filament, about 200g left.', where: 'Supply cabinet on the right side.', when: 'Yesterday', email: 'anon@newschool.edu' },
    ]
  },
  'Textiles Lab': {
    addr: '39 W 13th St',
    items: [
      { id: 50, type: 'found', title: 'Fabric Samples Found', loc: 'Textiles Lab – Cutting Table', time: '2 hours ago', what: 'Bundle of fabric swatches in a ziplock bag, labeled with color codes.', where: 'Cutting table near the window.', when: 'Today', email: 'anon@newschool.edu' },
      { id: 51, type: 'lost',  title: 'Sewing Kit Lost',      loc: 'Textiles Lab – Station 7',    time: 'Yesterday',   what: 'Small red tin sewing kit with needles, thread, and scissors.', where: 'Sewing station 7.', when: 'Yesterday afternoon', email: 'anon@newschool.edu' },
    ]
  },
  'Photography Lab': {
    addr: '66 W 12th St',
    items: [
      { id: 52, type: 'lost',  title: 'Camera Lens Lost',  loc: 'Photography Lab – Studio B',      time: '3 hours ago', what: '50mm prime lens, Canon EF mount. Has a small nick on the filter ring.', where: 'Studio B equipment shelf.', when: 'Today during afternoon session', email: 'photographer@newschool.edu' },
      { id: 53, type: 'found', title: 'Memory Card Found', loc: 'Photography Lab – Checkout Desk', time: '1 day ago',   what: '64GB SD card in a clear case. Has photos on it.', where: 'Left at the equipment checkout desk.', when: 'Yesterday', email: 'lab@newschool.edu' },
    ]
  },
  'Digital Fabrication Lab': {
    addr: '2 W 13th St – L2',
    items: [
      { id: 54, type: 'found', title: 'Laptop Found', loc: 'Digital Fab Lab – Workstation',     time: '1 hour ago',  what: 'MacBook Air 13", silver, no stickers. Left at a workstation.', where: 'Workstation row near the windows.', when: 'This morning', email: 'anon@newschool.edu' },
      { id: 55, type: 'lost',  title: 'Stylus Lost',  loc: 'Digital Fab Lab – Drawing Tablets', time: '6 hours ago', what: 'Wacom stylus pen, black. Fits Intuos tablets.', where: 'Drawing tablet station.', when: 'Today around noon', email: 'anon@newschool.edu' },
    ]
  },
};

let currentBuilding = 'Kaplan Hall';
let currentItem     = null;
let allItems        = [];

const SVG_USER = `<svg width="13" height="13" viewBox="0 0 24 24" fill="#888" stroke="none"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;
const SVG_IMG  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#666" stroke="none"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`;
function goScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  const chatBox = document.getElementById('detail-chat-box');
  if (chatBox) chatBox.classList.remove('open');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector('.nav-link')?.classList.add('active');
  const navBuilding = document.getElementById('nav-building');
  if (navBuilding) navBuilding.style.display = (id === 'building' || id === 'item-detail') ? 'inline' : 'none';
    document.querySelector('.navbar').style.display = id === 'home' ? 'none' : 'flex';

}

function toggleCat(id, el) {
  const drop   = document.getElementById(id);
  const isOpen = drop.classList.contains('open');
  document.querySelectorAll('.dropdown-locations').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.category-name').forEach(n => n.classList.remove('open'));
  if (!isOpen) {
    drop.classList.add('open');
    el.querySelector('.category-name').classList.add('open');
  }
}

function goBuilding(name, addr, e) {
  if (e) e.stopPropagation();
  currentBuilding = name;
  document.getElementById('bld-name').textContent = name;
  document.getElementById('bld-addr').textContent = addr;
  const bldData = BUILDINGS[name] || { items: [] };
  allItems = bldData.items;
  renderActivity(allItems);
  const navBuilding = document.getElementById('nav-building');
  if (navBuilding) { navBuilding.textContent = name; navBuilding.style.display = 'inline'; }
  goScreen('building');
}

function renderActivity(items) {
  const list = document.getElementById('activity-list');
  if (!items.length) {
    list.innerHTML = '<div style="color:var(--gray);padding:24px 0;text-align:center;font-size:14px">No activity yet at this location.</div>';
    return;
  }
  list.innerHTML = items.map(item => `
    <div class="activity-item" onclick="goItem(${item.id})">
      <div class="activity-title">${item.title}</div>
      <div class="activity-meta"><span>${item.time}</span><span>›</span></div>
    </div>
  `).join('');
}

function filterActivity(q) {
  const filtered = allItems.filter(i =>
    i.title.toLowerCase().includes(q.toLowerCase()) ||
    i.what.toLowerCase().includes(q.toLowerCase())
  );
  renderActivity(filtered);
}

function globalSearch(q) {
  const resultsBox  = document.getElementById('global-results');
  const resultsList = document.getElementById('global-results-list');
  if (!q.trim()) { resultsBox.style.display = 'none'; return; }
  const allData = Object.values(BUILDINGS).flatMap(b => b.items);
  const matches = allData.filter(i =>
    i.title.toLowerCase().includes(q.toLowerCase()) ||
    i.what.toLowerCase().includes(q.toLowerCase()) ||
    i.where.toLowerCase().includes(q.toLowerCase())
  );
  resultsBox.style.display = 'block';
  resultsList.innerHTML = matches.length
    ? matches.map(item => `
        <div class="global-result-item" onclick="goItem(${item.id})">
          <div><div class="global-result-title">${item.title}</div><div class="global-result-loc">${item.loc}</div></div>
          <span style="color:var(--gray)">›</span>
        </div>`).join('')
    : '<div style="padding:14px 18px;color:var(--gray);font-size:13px">No results found.</div>';
}

function goItem(id) {
  const allData = Object.values(BUILDINGS).flatMap(b => b.items);
  currentItem   = allData.find(i => i.id === id);
  if (!currentItem) return;

  for (const [name, bld] of Object.entries(BUILDINGS)) {
    if (bld.items.find(i => i.id === id)) {
      currentBuilding = name;
      document.getElementById('bld-name').textContent = name;
      document.getElementById('bld-addr').textContent = bld.addr;
      allItems = bld.items;
      renderActivity(allItems);
      break;
    }
  }

  document.getElementById('detail-title').textContent = currentItem.title;
  document.getElementById('detail-loc').textContent   = currentItem.loc;
  document.getElementById('detail-email').textContent = currentItem.email;
  document.getElementById('detail-what').textContent  = currentItem.what;
  document.getElementById('detail-where').textContent = currentItem.where;

  const rawWhen    = currentItem.when;
  const parsedDate = rawWhen ? new Date(rawWhen) : null;
  document.getElementById('detail-when').textContent = parsedDate && !isNaN(parsedDate)
    ? parsedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : rawWhen;

  const imgBox = document.getElementById('detail-image-box');
  imgBox.innerHTML = currentItem.image
    ? `<img src="${currentItem.image}" alt="item image">`
    : `<span class="detail-image-placeholder">${SVG_IMG} No image provided</span>`;

  document.getElementById('detail-chat-messages').innerHTML = '';
  document.getElementById('global-results').style.display = 'none';
  document.getElementById('global-search').value = '';

  const navBuilding = document.getElementById('nav-building');
  if (navBuilding) { navBuilding.textContent = currentBuilding; navBuilding.style.display = 'inline'; }

  goScreen('item-detail');
}

function toggleForm(id, btn) {
  const form   = document.getElementById(id);
  const isOpen = form.classList.contains('open');
  document.querySelectorAll('.inline-form').forEach(f => f.classList.remove('open'));
  document.querySelectorAll('.report-btn').forEach(b => b.classList.remove('open'));
  if (!isOpen) {
    form.classList.add('open');
    btn.classList.add('open');
    setTimeout(() => form.querySelector('.form-input').focus(), 50);
  }
}

function submitInline(type, whatId, whenId, whereId) {
  const what  = document.getElementById(whatId).value.trim();
  const when  = document.getElementById(whenId).value.trim();
  const where = document.getElementById(whereId).value.trim();
  if (!what) { document.getElementById(whatId).focus(); return; }

  const formEl    = document.getElementById(whatId).closest('.inline-form');
  const fileInput = formEl ? formEl.querySelector('input[type="file"]') : null;
  let imageDataUrl = null;

  function finish() {
    const newItem = {
      id: Date.now(), type,
      title: `${what.substring(0, 30)} ${type === 'lost' ? 'Lost' : 'Found'}`,
      loc:   `${currentBuilding} – ${where || 'location unknown'}`,
      time:  'Just now', what,
      where: where || 'Unknown',
      when:  when  || 'Unknown',
      email: MY_HANDLE,
      image: imageDataUrl
    };
    if (!BUILDINGS[currentBuilding]) BUILDINGS[currentBuilding] = { items: [] };
    BUILDINGS[currentBuilding].items.unshift(newItem);
    allItems = BUILDINGS[currentBuilding].items;
    lastPostedItem = newItem;
    document.querySelectorAll('.inline-form').forEach(f => f.classList.remove('open'));
    document.querySelectorAll('.report-btn').forEach(b => b.classList.remove('open'));
    [whatId, whenId, whereId].forEach(id => { document.getElementById(id).value = ''; });
    document.getElementById('success-text').innerHTML = `Your report has been posted.<br>Others at this location will be notified.`;
    goScreen('success');
  }

  if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = e => { imageDataUrl = e.target.result; finish(); };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    finish();
  }
}

function previewImage(input, previewId) {
  const preview = document.getElementById(previewId);
  preview.innerHTML = '';
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function toggleDetailChat() {
  document.getElementById('detail-chat-box').classList.toggle('open');
}

function makeChatRow(text, isMe) {
  const name = isMe ? MY_NAME : (currentItem ? currentItem.email.split('@')[0] : 'poster');
  const side = isMe ? 'me' : 'them';
  const row  = document.createElement('div');
  row.className = `chat-msg-row ${side}`;
  row.innerHTML = `
    <div class="chat-avatar">${SVG_USER}</div>
    <div class="chat-bubble-wrap ${side}">
      <div class="chat-name">${name}</div>
      <div class="msg ${side}">${text}</div>
    </div>`;
  return row;
}

function sendDetailMsg(e) { if (e.key === 'Enter') sendDetailMsgClick(); }

function sendDetailMsgClick() {
  const input = document.getElementById('detail-chat-input');
  const text  = input.value.trim();
  if (!text) return;
  const msgs = document.getElementById('detail-chat-messages');
  msgs.appendChild(makeChatRow(text, true));
  input.value    = '';
  msgs.scrollTop = msgs.scrollHeight;
}

function viewPost() {
  if (!lastPostedItem) return;
  goItem(lastPostedItem.id);
}

document.addEventListener('click', function(e) {
  if (e.target.type === 'datetime-local') {
    try { e.target.showPicker(); } catch(err) {}
  }
});
