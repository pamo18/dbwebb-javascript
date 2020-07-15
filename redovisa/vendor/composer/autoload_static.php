<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita360c9fd3fbc94a1ea019cd1d6744221
{
    public static $files = array (
        '2cffec82183ee1cea088009cef9a6fc3' => __DIR__ . '/..' . '/ezyang/htmlpurifier/library/HTMLPurifier.composer.php',
    );

    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Michelf\\' => 8,
        ),
        'A' => 
        array (
            'Anax\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Michelf\\' => 
        array (
            0 => __DIR__ . '/..' . '/michelf/php-markdown/Michelf',
        ),
        'Anax\\' => 
        array (
            0 => __DIR__ . '/..' . '/anax/textfilter/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'M' => 
        array (
            'Michelf' => 
            array (
                0 => __DIR__ . '/..' . '/michelf/php-smartypants',
            ),
        ),
        'H' => 
        array (
            'Highlight\\' => 
            array (
                0 => __DIR__ . '/..' . '/scrivo/highlight.php',
            ),
            'HTMLPurifier' => 
            array (
                0 => __DIR__ . '/..' . '/ezyang/htmlpurifier/library',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita360c9fd3fbc94a1ea019cd1d6744221::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita360c9fd3fbc94a1ea019cd1d6744221::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInita360c9fd3fbc94a1ea019cd1d6744221::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
