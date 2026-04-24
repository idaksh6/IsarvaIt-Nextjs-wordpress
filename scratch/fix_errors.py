import os

path = 'src/app/components'
files = [f for f in os.listdir(path) if f.endswith('BrochureModal.jsx') or f == 'GeneralApplicationModal.jsx' or f == 'CareerApplicationForm.jsx']

target = """if (data.error && typeof data.error === 'string') {
          if (data.error.includes('mobile') || data.error.includes('phone')) {
            friendlyError = 'Please enter a proper phone number.';
          } else if (data.error.includes('email')) {
            friendlyError = 'Please enter a valid email address.';
          } else if (data.error.includes('name')) {
            friendlyError = 'Please enter your full name.';
          } else {
            friendlyError = data.error;
          }
        }"""

replacement = """if (typeof data.error === 'string') {
          if (data.error.includes('mobile') || data.error.includes('phone')) {
            friendlyError = data.error.includes('associated') ? 'This phone number is already registered.' : 'Please enter a valid phone number.';
          } else if (data.error.includes('email')) {
            friendlyError = (data.error.includes('taken') || data.error.includes('associated')) ? 'This email address is already registered.' : 'Please enter a valid email address.';
          }
        }"""

for f in files:
    full_path = os.path.join(path, f)
    with open(full_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if target in content:
        print(f'Updating {f}')
        new_content = content.replace(target, replacement)
        with open(full_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
    else:
        # Try a slightly different variation without name check (some might have it)
        target_no_name = """if (data.error && typeof data.error === 'string') {
          if (data.error.includes('mobile') || data.error.includes('phone')) {
            friendlyError = 'Please enter a proper phone number.';
          } else if (data.error.includes('email')) {
            friendlyError = 'Please enter a valid email address.';
          } else {
            friendlyError = data.error;
          }
        }"""
        if target_no_name in content:
            print(f'Updating {f} (no-name variant)')
            new_content = content.replace(target_no_name, replacement)
            with open(full_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
        else:
            print(f'Target not found in {f}')
