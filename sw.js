const cacheName = 'orders-v1';
const assets = [
  '/index.html',
  '/manifest.json',
  '/sw.js',
  // your audio files:
  '/audio/audio_0_What_is__the_first_general_order_.mp3',
  '/audio/audio_1_To_take_charge_of_this_post_and_all_government_property_in_view.mp3',
  '/audio/audio_2_What_is__the_second_general_order__.mp3',
  '/audio/audio_3__To_walk_my_post_in_a_military_manner__keeping_always_on_the_alert_and_observing_everything_that_tak~.mp3',
  '/audio/audio_4_What_is__the_third_general_order__.mp3',
  '/audio/audio_5__To_report_all_violations_of_orders_I_am_instructed_to_enforce_.mp3',
  '/audio/audio_6_What_is__the_fourth_general_order__.mp3',
  '/audio/audio_7__To_repeat_all_calls_from_posts_more_distant_from_the_guardhouse_than_my_own_.mp3',
  '/audio/audio_8_What_is__the_fifth_general_order__.mp3',
  '/audio/audio_9__To_quit_my_post_only_when_properly_relieved_.mp3',
  '/audio/audio_10_What_is__the_sixth_general_order__.mp3',
  '/audio/audio_11__To_receive__obey__and_pass_on_to_the_sentry_who_relieves_me__all_orders_from_the_commanding_officer~.mp3',
  '/audio/audio_12_What_is__the_seventh_general_order__.mp3',
  '/audio/audio_13__To_talk_to_no_one_except_in_line_of_duty_.mp3',
  '/audio/audio_14_What_is__the_eigtht_general_order__.mp3',
  '/audio/audio_15__To_give_the_alarm_in_case_of_fire_or_disorder_.mp3',
  '/audio/audio_16_What_is__the_nineth_general_order__.mp3',
  '/audio/audio_17_To_call_the_corporal_of_the_guard_in_any_case_not_covered_by_instructions_.mp3',
  '/audio/audio_18_What_is__the_tenth_general_order__.mp3',
  '/audio/audio_19_To_salute_all_officers_and_all_colors_and_standards_not_cased_.mp3',
  '/audio/audio_20_What_is__the_evelenth_general_order__.mp3',
  '/audio/audio_21__To_be_especially_watchful_at_night__and_during_the_time_for_challenging__to_challenge_all_persons_o~.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
