# Responsive Emails (MJML) Starter

This repository contains responsive email templates.

This project was generated using [MJML - Responsive email framework](https://github.com/mjmlio/mjml). You can use it with NodeJS.

**Current [Brands]**\
fourleaf: fl\
shell: shell

## Getting Started

Clone app and run `npm install` install packages and get started.

## Dependencies

- NodeJS
- MJML

## Tip

Use the vsCode extension - MJML v1.6.0 (Attila Buti)

## Build Templates

Templates start life as mjml files in the mjml dir - these include shared files from the shared dir.\
**NOTE: This is the only place files should be edited**

Run `npm run build:[brand if used]` to compile MJML into HTML (html dir)

Run `npm run build:[brand if used]:prod` to compile MJML into HTML & minify. (html dir)

Run `npm run build:[brand if used]:extra` to perform extra actions to emails after build (not currenly used - hee in case)

## Deploy assets (TODO)