import ClipboardJS from 'clipboard/dist/clipboard.min.js?client';
import hljs from 'highlight.js?client';

function hasClass(el, cls) {
  return el.className.split(' ').indexOf(cls) !== -1;
}

function pcodbnd(source, blacklist) {
  source = source
    .replace(/\r/g, '')
    .replace(/\t/g, '  ')
    .replace(/^ *\n+/, '\n')
    .replace(/[\s\n]+$/, '');

  if (blacklist) {
    source = source.replace(/class="([^"]+)"/g, function (m, clsStr) {
      var clsArr = clsStr
        .replace(/^\s+|\s+$/, '')
        .replace(/\s+/g, ' ')
        .split(' ');

      for (var i = 0, l = blacklist.length, clsInd; i < l; i++) {
        if ((clsInd = clsArr.indexOf(blacklist[i])) !== -1) {
          clsArr.splice(clsInd, 1);
        }
      }

      return 'class="' + clsArr.join(' ') + '"';
    });
  }

  return source
    .replace(/\s+class=""/gi, '')
    .replace(/([a-z]+)=""/gi, '$1')
    .replace(/javascript:void\(0\)/g, '#')
    .replace(/^\n/, '');
}

function pcclp(el, src) {
  return new ClipboardJS(el, {
    text: function () {
      return src;
    }
  });
}

function pcopnmdl(src, formattedSrc) {
  document.querySelector('.pc-modal-content').innerHTML = '<pre><code class="hljs html xml">' + formattedSrc + '</code></pre>';

  var btn_copy = document.querySelector('.md-pc-modal-copy');
  var closeBtn = document.querySelector('.pc-modal-close');

  var btn_copyTimeout = null;
  var ClipboardJS = pcclp(btn_copy, src);

  ClipboardJS.on('success', function (e) {
    if (btn_copyTimeout) {
      clearTimeout(btn_copyTimeout);
      btn_copyTimeout = null;
    }

    btn_copy.className = btn_copy.className.replace(' copied', '');
    btn_copy.className += ' copied';

    btn_copyTimeout = setTimeout(function () {
      btn_copy.className = btn_copy.className.replace(' copied', '');
    }, 1000);
  });

  var closeListener = function () {
    document.querySelector('.pc-modal-content').innerHTML = '';
    document.querySelector('.pc-modal').scrollTop = 0;
    closeBtn.removeEventListener('click', closeListener);
    ClipboardJS.destroy();
    document.documentElement.className = document.documentElement.className.replace(' pc-modal-opened', '');
  };
  closeBtn.addEventListener('click', closeListener);
  document.documentElement.className += ' pc-modal-opened';
}

export default async function (params) {
  const components = document.querySelectorAll('.pc-component');

  components.forEach((parentEl) => {
    const btnsWrapper = document.createElement('div');
    btnsWrapper.className = 'pc-btns';

    const btn_copy = document.createElement('a');
    btn_copy.href = 'javascript:void(0)';
    btn_copy.className = 'md-pc-modal-copy copy';
    btn_copy.innerHTML = '<i class="ph-duotone ph-copy"></i>';

    const btn_md_collapse = document.createElement('a');
    btn_md_collapse.href = 'javascript:void(0)';
    btn_md_collapse.className = 'pc-collapse';
    btn_md_collapse.innerHTML = '<i class="ph-duotone ph-code"></i>';

    const blacklistStr = parentEl.getAttribute('data-blacklist') || '';
    const blacklist = blacklistStr ? blacklistStr.split(',') : [];
    const formattedHtml = window.html_beautify(parentEl.innerHTML, {
      indent_size: 4,
      space_in_empty_paren: true,
      end_with_newline: true,
      preserve_newlines: true,
      max_preserve_newlines: 2,
      indent_inner_html: true,
      wrap_line_length: 0, // Prevent wrapping lines
      inline: [], // Inline elements that should not be formatted to a new line
      indent_scripts: 'normal'
    });

    const src = pcodbnd(formattedHtml, blacklist);
    const formattedSrc = hljs.highlight(src, { language: 'xml' }).value;

    let btn_copyTimeout = null;
    pcclp(btn_copy, src).on('success', function (e) {
      if (btn_copyTimeout) {
        clearTimeout(btn_copyTimeout);
        btn_copyTimeout = null;
      }
      btn_copy.className = btn_copy.className.replace(' copied', '');
      btn_copy.className += ' copied';

      btn_copyTimeout = setTimeout(function () {
        btn_copy.className = btn_copy.className.replace(' copied', '');
      }, 1000);
    });

    const codes = document.createElement('div');
    codes.className = 'pc-modal-content';
    codes.innerHTML = '<pre><code class="hljs html xml">' + formattedSrc + '</code></pre>';
    codes.appendChild(btn_copy);
    codes.appendChild(btn_md_collapse);
    parentEl.appendChild(codes);
    codes.childNodes[0].style.display = 'none';

    btn_md_collapse.addEventListener('click', function (e) {
      const codeBlock = btn_md_collapse.parentElement.childNodes[0];
      codeBlock.style.display = codeBlock.style.display === 'none' ? 'block' : 'none';
    });
  });
}
