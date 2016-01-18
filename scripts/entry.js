#!/usr/bin/env node
import childProcess from 'child_process';
import fs from 'fs-extra';
import moment from 'moment';

const today = new Date();
const path = `pages/${moment(today).format('YYYY-MM-DD')}/index.md`;

/**
 * Set Weekdays Locale
 */
moment.locale('jp', {weekdays: ['日', '月', '火', '水', '木', '金', '土']});

/**
 * Get Post Template
 *
 * @return {string}
 */
function getPostTmp() {
  return [
    '---\n',
    'title: "post"\n',
    `date: "${moment(today).format('YYYY-MM-DD hh:mm:ss (dddd)')}"\n`,
    'layout: post\n',
    'readNext: ""\n',
    `path: "/${moment(today).format('YYYYMMDD')}/"\n`,
    '---'
  ].join('');
}

/**
 * If already been created: Open File
 * else: Create & Open File
 */
fs.open(path, 'r+', err => {
  if (err) {
    const ws = fs.createOutputStream(path);
    ws.write(getPostTmp());
  }
  childProcess.spawn('vim', [path], {stdio: 'inherit'});
});

