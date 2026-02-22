/**
 * KIRH Static Site - Main JavaScript
 * Navbar (mobile menu, scroll), forms (mailto), stats counter, team modal
 */
(function () {
  'use strict';

  // --- Navbar: set active link from body data-page ---
  (function setActiveNav() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;
    document.querySelectorAll('header nav a[href]').forEach(function (a) {
      var href = (a.getAttribute('href') || '').replace(/^\.\//, '');
      var isActive = (page === 'home' && (href === 'index.html' || href === '')) || (page !== 'home' && href === page + '.html');
      if (isActive) {
        a.classList.add('text-primary-600', 'bg-primary-50', 'border-b-2', 'border-primary-600');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('text-primary-600', 'bg-primary-50', 'border-b-2', 'border-primary-600');
        a.removeAttribute('aria-current');
      }
    });
    document.querySelectorAll('#mobile-menu a[href]').forEach(function (a) {
      var href = (a.getAttribute('href') || '').replace(/^\.\//, '');
      var isActive = (page === 'home' && (href === 'index.html' || href === '')) || (page !== 'home' && href === page + '.html');
      if (isActive) {
        a.classList.add('text-primary-600', 'bg-primary-100', 'border-l-4', 'border-primary-600');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('text-primary-600', 'bg-primary-100', 'border-l-4', 'border-primary-600');
        a.removeAttribute('aria-current');
      }
    });
  })();

  // --- Navbar: scroll state + mobile menu ---
  var header = document.querySelector('header');
  var mobileMenuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var body = document.body;

  if (header) {
    function updateScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateScroll);
    updateScroll();
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      var open = mobileMenu.getAttribute('aria-expanded') === 'true';
      mobileMenu.setAttribute('aria-expanded', !open);
      mobileMenu.classList.toggle('hidden', open);
      mobileMenu.classList.toggle('block', !open);
    });
  }

  // --- Contact form: mailto fallback ---
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('contact-name') || {}).value || '';
      var email = (document.getElementById('contact-email') || {}).value || '';
      var phone = (document.getElementById('contact-phone') || {}).value || '';
      var type = (document.getElementById('contact-type') || {}).value || 'general';
      var message = (document.getElementById('contact-message') || {}).value || '';
      var subject = encodeURIComponent('Contact form – KIRH Website');
      var body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nInquiry: ' + type + '\n\nMessage:\n' + message
      );
      window.location.href = 'mailto:info@kirh.co.ke?subject=' + subject + '&body=' + body;
    });
  }

  // --- Get Support form: steps + mailto ---
  var getSupportForm = document.getElementById('get-support-form');
  if (getSupportForm) {
    var step = 1;
    var supportData = {
      clientName: '',
      contactName: '',
      email: '',
      phone: '',
      address: '',
      supportNeeded: [],
      urgency: 'routine',
      preferredContact: 'phone',
      message: ''
    };

    function showStep(s) {
      step = s;
      document.querySelectorAll('[data-support-step]').forEach(function (el) {
        el.classList.add('hidden');
      });
      var stepEl = document.querySelector('[data-support-step="' + step + '"]');
      if (stepEl) stepEl.classList.remove('hidden');
      document.querySelectorAll('[data-support-progress]').forEach(function (el) {
        el.classList.toggle('bg-primary-600', parseInt(el.getAttribute('data-support-progress'), 10) <= step);
        el.classList.toggle('bg-gray-200', parseInt(el.getAttribute('data-support-progress'), 10) > step);
        el.classList.toggle('text-white', parseInt(el.getAttribute('data-support-progress'), 10) <= step);
        el.classList.toggle('text-gray-500', parseInt(el.getAttribute('data-support-progress'), 10) > step);
      });
    }

    getSupportForm.querySelectorAll('input[name="supportNeeded[]"]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var arr = [];
        getSupportForm.querySelectorAll('input[name="supportNeeded[]"]:checked').forEach(function (c) {
          arr.push(c.value);
        });
        supportData.supportNeeded = arr;
      });
    });

    document.getElementById('support-step-next-1')?.addEventListener('click', function () {
      supportData.clientName = (document.getElementById('support-clientName') || {}).value || '';
      supportData.contactName = (document.getElementById('support-contactName') || {}).value || '';
      supportData.email = (document.getElementById('support-email') || {}).value || '';
      supportData.phone = (document.getElementById('support-phone') || {}).value || '';
      supportData.address = (document.getElementById('support-address') || {}).value || '';
      showStep(2);
    });
    document.getElementById('support-step-back-2')?.addEventListener('click', function () { showStep(1); });
    document.getElementById('support-step-next-2')?.addEventListener('click', function () { showStep(3); });
    document.getElementById('support-step-back-3')?.addEventListener('click', function () { showStep(2); });

    getSupportForm.addEventListener('submit', function (e) {
      e.preventDefault();
      supportData.urgency = (document.getElementById('support-urgency') || {}).value || 'routine';
      supportData.preferredContact = (document.getElementById('support-preferredContact') || {}).value || 'phone';
      supportData.message = (document.getElementById('support-message') || {}).value || '';
      var subject = encodeURIComponent('Get Support request – KIRH Website');
      var body = encodeURIComponent(
        [
          'Who needs support: ' + supportData.clientName,
          supportData.contactName ? 'Contact name: ' + supportData.contactName : '',
          'Email: ' + supportData.email,
          'Phone: ' + supportData.phone,
          'Address: ' + supportData.address,
          'Support needed: ' + supportData.supportNeeded.join(', '),
          'Urgency: ' + supportData.urgency,
          'Preferred contact: ' + supportData.preferredContact,
          supportData.message ? 'Message: ' + supportData.message : ''
        ].filter(Boolean).join('\n')
      );
      window.location.href = 'mailto:support@kirh.co.ke?subject=' + subject + '&body=' + body;
      var done = document.getElementById('get-support-done');
      if (done) { done.classList.remove('hidden'); getSupportForm.classList.add('hidden'); }
    });
  }

  // --- Partner form: steps + mailto ---
  var partnerForm = document.getElementById('partner-form');
  if (partnerForm) {
    var pStep = 1;
    var partnerData = {
      organizationName: '',
      organizationType: '',
      contactPerson: '',
      title: '',
      email: '',
      phone: '',
      website: '',
      partnershipType: [],
      partnershipGoals: '',
      timeline: ''
    };

    function showPartnerStep(s) {
      pStep = s;
      document.querySelectorAll('[data-partner-step]').forEach(function (el) {
        el.classList.add('hidden');
      });
      var stepEl = document.querySelector('[data-partner-step="' + pStep + '"]');
      if (stepEl) stepEl.classList.remove('hidden');
      document.querySelectorAll('[data-partner-progress]').forEach(function (el) {
        var n = parseInt(el.getAttribute('data-partner-progress'), 10);
        el.classList.toggle('bg-primary-600', n <= pStep);
        el.classList.toggle('bg-gray-200', n > pStep);
        el.classList.toggle('text-white', n <= pStep);
        el.classList.toggle('text-gray-500', n > pStep);
      });
    }

    partnerForm.querySelectorAll('input[name="partnershipType[]"]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var arr = [];
        partnerForm.querySelectorAll('input[name="partnershipType[]"]:checked').forEach(function (c) {
          arr.push(c.value);
        });
        partnerData.partnershipType = arr;
      });
    });

    document.getElementById('partner-step-next-1')?.addEventListener('click', function () {
      partnerData.organizationName = (document.getElementById('partner-organizationName') || {}).value || '';
      partnerData.organizationType = (document.getElementById('partner-organizationType') || {}).value || '';
      partnerData.website = (document.getElementById('partner-website') || {}).value || '';
      partnerData.contactPerson = (document.getElementById('partner-contactPerson') || {}).value || '';
      partnerData.title = (document.getElementById('partner-title') || {}).value || '';
      partnerData.email = (document.getElementById('partner-email') || {}).value || '';
      partnerData.phone = (document.getElementById('partner-phone') || {}).value || '';
      showPartnerStep(2);
    });
    document.getElementById('partner-step-back-2')?.addEventListener('click', function () { showPartnerStep(1); });
    document.getElementById('partner-step-next-2')?.addEventListener('click', function () { showPartnerStep(3); });
    document.getElementById('partner-step-back-3')?.addEventListener('click', function () { showPartnerStep(2); });

    partnerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      partnerData.partnershipGoals = (document.getElementById('partner-partnershipGoals') || {}).value || '';
      partnerData.timeline = (document.getElementById('partner-timeline') || {}).value || '';
      var subject = encodeURIComponent('Partnership application – KIRH Website');
      var body = encodeURIComponent(
        [
          'Organization: ' + partnerData.organizationName,
          'Type: ' + partnerData.organizationType,
          partnerData.website ? 'Website: ' + partnerData.website : '',
          'Contact: ' + partnerData.contactPerson,
          partnerData.title ? 'Title: ' + partnerData.title : '',
          'Email: ' + partnerData.email,
          'Phone: ' + partnerData.phone,
          'Partnership types: ' + partnerData.partnershipType.join(', '),
          'Goals: ' + partnerData.partnershipGoals,
          'Timeline: ' + partnerData.timeline
        ].filter(Boolean).join('\n')
      );
      window.location.href = 'mailto:partner@kirh.co.ke?subject=' + subject + '&body=' + body;
      var done = document.getElementById('partner-done');
      if (done) {
        done.classList.remove('hidden');
        var wrap = partnerForm.closest('.form-wrap') || partnerForm.closest('.section-container');
        if (wrap) wrap.classList.add('hidden');
      }
    });
  }

  // --- Stats counter animation (when in view) ---
  function animateValue(el, end, prefix, suffix, duration) {
    var start = 0;
    var isK = (el.getAttribute('data-value') || '').toString().indexOf('K') >= 0;
    if (isK) end = parseFloat((el.getAttribute('data-value') || '0').replace('K', '')) * 1000;
    else end = parseInt((el.getAttribute('data-value') || '0').replace(/\D/g, ''), 10) || end;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easeOut = 1 - Math.pow(1 - progress, 4);
      var current = Math.floor(easeOut * end);
      el.textContent = prefix + (isK ? (current / 1000).toFixed(current >= 1000 ? 0 : 1) + 'K' : current) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var statsObserver = null;
  if (typeof IntersectionObserver !== 'undefined') {
    statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var elements = entry.target.querySelectorAll('[data-stat-value]');
          elements.forEach(function (el) {
            if (el.getAttribute('data-animated') === 'yes') return;
            el.setAttribute('data-animated', 'yes');
            var val = el.getAttribute('data-value') || '0';
            var prefix = el.getAttribute('data-prefix') || '';
            var suffix = el.getAttribute('data-suffix') || '';
            var num = val.replace('K', '').replace(/\D/g, '');
            animateValue(el, parseInt(num, 10) || 0, prefix, suffix, 2000);
          });
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('[data-stats-block]').forEach(function (block) {
      statsObserver.observe(block);
    });
  }

  // --- Team member modal ---
  var modal = document.getElementById('team-modal');
  var modalContent = document.getElementById('team-modal-content');
  var modalClose = document.getElementById('team-modal-close');

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }
  function openTeamModal(memberJson) {
    if (!modal || !modalContent) return;
    try {
      var member = typeof memberJson === 'string' ? JSON.parse(memberJson) : memberJson;
      var html = '<div class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">';
      html += '<button type="button" id="team-modal-close" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" aria-label="Close modal">&#215;</button>';
      html += '<div class="bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-8 rounded-t-2xl">';
      html += '<div class="flex flex-col items-center text-center">';
      html += '<div class="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-white text-5xl font-display font-bold border-4 border-white/30 mb-4">' + escapeHtml(member.name ? member.name.charAt(0) : '') + '</div>';
      html += '<h2 id="modal-title" class="text-3xl font-display font-bold mb-2">' + escapeHtml(member.name || '') + '</h2>';
      html += '<p class="text-xl text-white/90 font-semibold mb-4">' + escapeHtml(member.role || '') + '</p>';
      if (member.email) {
        html += '<a href="mailto:' + escapeHtml(member.email) + '" class="text-white/90 hover:text-white underline">' + escapeHtml(member.email) + '</a>';
      }
      html += '</div></div>';
      html += '<div class="p-8 text-left space-y-6">';
      html += '<div><h3 class="text-xl font-display font-bold text-gray-900 mb-3">About</h3><p class="text-gray-700 leading-relaxed">' + escapeHtml(member.bio || '') + '</p></div>';
      if (member.experience && member.experience.length) {
        html += '<div><h3 class="text-xl font-display font-bold text-gray-900 mb-3">Experience</h3><ul class="space-y-2">';
        member.experience.forEach(function (ex) { html += '<li class="flex items-start gap-2 text-gray-700"><span class="text-primary-600 mt-1">&#10003;</span><span>' + escapeHtml(ex) + '</span></li>'; });
        html += '</ul></div>';
      }
      if (member.qualifications && member.qualifications.length) {
        html += '<div><h3 class="text-xl font-display font-bold text-gray-900 mb-3">Academic Qualifications</h3><ul class="space-y-2">';
        member.qualifications.forEach(function (q) { html += '<li class="flex items-start gap-2 text-gray-700"><span class="text-secondary-600 mt-1">&#10003;</span><span>' + escapeHtml(q) + '</span></li>'; });
        html += '</ul></div>';
      }
      if (member.professionalCertifications && member.professionalCertifications.length) {
        html += '<div><h3 class="text-xl font-display font-bold text-gray-900 mb-3">Professional Certifications</h3><ul class="space-y-2">';
        member.professionalCertifications.forEach(function (c) { html += '<li class="flex items-start gap-2 text-gray-700"><span class="text-warm-600 mt-1">&#10003;</span><span>' + escapeHtml(c) + '</span></li>'; });
        html += '</ul></div>';
      }
      if (member.skills && member.skills.length) {
        html += '<div><h3 class="text-xl font-display font-bold text-gray-900 mb-3">Key Skills</h3><div class="flex flex-wrap gap-2">';
        member.skills.forEach(function (sk) { html += '<span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">' + escapeHtml(sk) + '</span>'; });
        html += '</div></div>';
      }
      if (member.memberships && member.memberships.length) {
        html += '<div><h3 class="text-xl font-display font-bold text-gray-900 mb-3">Professional Memberships</h3><ul class="space-y-2">';
        member.memberships.forEach(function (m) { html += '<li class="flex items-start gap-2 text-gray-700"><span class="text-primary-600 mt-1">&#10003;</span><span>' + escapeHtml(m) + '</span></li>'; });
        html += '</ul></div>';
      }
      html += '</div></div>';
      modalContent.innerHTML = html;
      modal.classList.remove('hidden');
      body.style.overflow = 'hidden';
      var closeBtn = document.getElementById('team-modal-close');
      if (closeBtn) closeBtn.addEventListener('click', closeTeamModal);
    } catch (err) {
      console.warn('Team modal data error', err);
    }
  }

  function closeTeamModal() {
    if (modal) {
      modal.classList.add('hidden');
      body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeTeamModal);
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeTeamModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeTeamModal();
  });

  document.querySelectorAll('[data-team-member]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var json = btn.getAttribute('data-team-member');
      if (json) openTeamModal(json);
    });
  });

  document.querySelectorAll('[data-team-source][data-team-index]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-team-source');
      var idx = parseInt(btn.getAttribute('data-team-index'), 10);
      var el = id ? document.getElementById(id) : null;
      if (!el || typeof el.textContent === 'undefined') return;
      try {
        var arr = JSON.parse(el.textContent);
        var member = arr[idx];
        if (member) openTeamModal(member);
      } catch (e) {
        console.warn('Team data parse error', e);
      }
    });
  });

  // Expose for inline use if needed
  window.KIRH = window.KIRH || {};
  window.KIRH.openTeamModal = openTeamModal;
  window.KIRH.closeTeamModal = closeTeamModal;
})();
