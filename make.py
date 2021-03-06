# -*- coding: utf-8 -*-

import json
import os
import random
import sys
import yaml

def read_yaml(name):
    with open(os.path.join('data', name + '.yml')) as f:
        return yaml.load(f)

datasets = {name: read_yaml(name) for name in ['characters', 'roles', 'actions', 'actions2']}

combinations = [
    (20, 'characters', ': ', 'actions'),
    (40, 'characters', ': as ', 'roles'),
    (20, 'characters', ': ', 'actions2', ': ', 'characters'),
]

def count_combinations(args):
    n = 1
    for a in args:
        if not a.startswith(':'):
            n = n * len(datasets[a])

    return n

probabilities = []

n = 0
m = 0
for args in combinations:
    n += count_combinations(args[1:])
    m += args[0]
    probabilities.append(((m, n), args[1:]))

with open('html/data.js', 'w') as f:
    print >>f, 'datasets = %s;' % (json.dumps(datasets), )
    print >>f, 'probabilities = %s;' % (json.dumps(probabilities), )
    print >>f, 'nr_combinations = %u;' % (n, )
