module.exports = {

    copyCss: {
      src: ['{{ROOT}}/node_modules/@material/layout-grid/dist/mdc.layout-grid.css',
            '{{ROOT}}/node_modules/@material/textfield/dist/mdc.textfield.min.css',
            '{{ROOT}}/node_modules/@material/floating-label/dist/mdc.floating-label.min.css'],
      dest: '{{WWW}}/assets/css'
    },
    copyJs: {
        src: ['{{ROOT}}/node_modules/@material/textfield/dist/mdc.textfield.min.js',
        '{{ROOT}}/node_modules/@material/animation/dist/mdc.animation.min.js',
        '{{ROOT}}/node_modules/@material/floating-label/dist/mdc.floatingLabel.min.js'],
        dest: '{{WWW}}/assets/js'
    },

  }