#!/usr/bin/env node
/**
 * Created by Moyu on 16/8/15.
 */

"use strict";
var net = require('net')
var argv = require('minimist')(process.argv.slice(2))


const client = net.connect({
    port: argv.p || 9988,
    host: argv.h || 'localhost'
}, () => {
    console.log(`connected ${client.remoteAddress}:${client.remotePort}`)
})
client.setEncoding(null)

client.pipe(process.stdout)

process.stdin.pipe(client)

client.on('close', () => {
    console.log(`${client.remoteAddress}:${client.remotePort} connection closed`)
})

