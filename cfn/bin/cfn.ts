#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { WebsiteStack } from '../lib/cfn-stack';

const app = new cdk.App();
new WebsiteStack(app, 'WebsiteStack');
