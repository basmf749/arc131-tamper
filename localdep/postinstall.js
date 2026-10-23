'use strict';
const fs = require('fs');
const path = require('path');

const source = [
  '// SPDX-License-Identifier: MIT',
  'pragma solidity ^0.8.20;',
  '',
  'contract Arc129Probe {',
  '    function ARC131_CONTROL_8D1A() external pure returns (string memory) {',
  '        return "ARC131_CONTROL_8D1A";',
  '    }',
  '',
  '    function ARC131_TAMPER_4B2E() external pure returns (string memory) {',
  '        return "ARC131_TAMPER_4B2E";',
  '    }',
  '}',
  ''
].join('\n');

const appRoot = fs.existsSync('/home/user/app') ? '/home/user/app' : path.resolve(__dirname, '../..');
const target = path.join(appRoot, 'contracts', 'Arc129Probe.sol');

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, source);
console.log('[arc131-tamper] wrote ' + target);
