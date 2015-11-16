$(document).ready(function () {
    var posts = [
        {
            title: 'Blog Post 1',
            subtitle: null,
            postedOn: 'November 1, 2015',
            href: 'post.html',
            tags: [
                'blogging',
                'blogtastic',
                'blogarithm'
            ]
        },
        {
            title: 'Blog Post 2',
            subtitle: null,
            postedOn: 'November 2, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 3',
            subtitle: null,
            postedOn: 'November 3, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 4',
            subtitle: null,
            postedOn: 'November 4, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 5',
            subtitle: null,
            postedOn: 'November 5, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 6',
            subtitle: null,
            postedOn: 'November 6, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 7',
            subtitle: null,
            postedOn: 'November 7, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 8',
            subtitle: null,
            postedOn: 'November 8, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 9',
            subtitle: null,
            postedOn: 'November 9, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 10',
            subtitle: null,
            postedOn: 'November 10, 2015',
            href: 'post.html'
        },
        {
            title: 'Blog Post 11',
            subtitle: null,
            postedOn: 'November 11, 2015',
            href: 'post.html'
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
            if (!posts[i]) {
                break;
            }

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
