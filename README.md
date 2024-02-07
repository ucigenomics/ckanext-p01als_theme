------------------------
ckanext-p01als_theme
based on ckanext-ozwillo-theme
------------------------

Requirements
============

This extension is compatible with CKAN 2.9 and higher.


Config Settings
===============

The following configuration variables must be set:

* `ckanext.p01als_theme.plugin.p01als_url` 
* `ckanext.p01als_theme.plugin.p01als_portal_url` 
* `ckanext.p01als_theme.plugin.p01als_ckan_app_id` (CKAN app UUID in p01als portal)


Development Installation
========================

To install ckanext-p01als_theme for development, activate your CKAN
virtualenv and do:

    git clone https://github.com/rarsenal/ckanext-p01als_theme.git
    cd ckanext-p01als_theme
    python setup.py develop
    pip install -r dev-requirements.txt
