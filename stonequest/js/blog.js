$(document).ready(function () {
    var posts = [
        {
            title: 'Story Time',
            postedOn: 'November 21, 2015',
            href: 'posts/story-time.html',
            tags: [
                'stonequest',
                'java',
                'story'
            ]
        },
        {
            title: 'Never Satisfied',
            postedOn: 'November 17, 2015',
            href: 'posts/never-satisfied.html',
            tags: [
                'stonequest',
                'java',
                'ui'
            ]
        },
        {
            title: 'StoneQuest\'s Origins',
            subtitle: 'How and why StoneQuest began.',
            postedOn: 'November 15, 2015',
            href: 'posts/stonequest-begins.html',
            tags: [
                'stonequest',
                'beginnings',
                'java',
                'swing'
            ]
        }
    ];

    function setBlogPost(post, i) {
        var postHtml = $('#post-' + (i + 1));
        if (!post) {
            postHtml.addClass('hidden');
            return;
        } else {
            postHtml.removeClass('hidden');
        }

        postHtml.find('h2').html(post.title);
        postHtml.find('a').attr('href', post.href);

        if (post.subtitle) {
            postHtml.find('h3').html(post.subtitle);
        } else {
            postHtml.find('h3').html('');
        }

        if (post.tags) {
            var tags = 'Filed under ';

            $.each(post.tags, function () {
                tags += '<a href="search?q=' + this + '">#' + this + '</a> ';
            });

            postHtml.find('span').html(tags);
        } else {
            postHtml.find('span').html('');
        }

        postHtml.find('p').html('Posted on ' + post.postedOn);
    }

    var startIndex = 0;

    (function () {
        for (var i = 0; i < 5; ++i) {
            setBlogPost(posts[i], i);
        }

        if (posts.length > 4) {
            $('#older-posts').removeClass('hidden');
        }
    })();

    $('#older-posts').on('click', function () {
        startIndex += 4;
        
        for (var i = startIndex, j = 0; i < startIndex + 4; ++i, ++j) {
            setBlogPost(posts[i], j);
        }
        
        $('#newer-posts').removeClass('hidden');
        
        if (startIndex + 4 >= posts.length) {
            $('#older-posts').addClass('hidden');
        }
    });

    $('#newer-posts').on('click', function () {
        startIndex -= 4;
        
        for (var i = startIndex, j = 0; i < startIndex + 4; ++i, ++j) {
            setBlogPost(posts[i], j);
        }
        
        if (startIndex <= 0) {
            $('#newer-posts').addClass('hidden');
        }
        if (startIndex + 4 < posts.length) {
            $('#older-posts').removeClass('hidden');
        }
    });
});
