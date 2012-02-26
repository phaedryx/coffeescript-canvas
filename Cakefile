sys     = require 'util'
{spawn} = require 'child_process'

task "watch", "watch and compile coffeescript files when modified", ->
  source      = 'src'
  destination = 'javascripts'
  sys.puts "Starting coffeescript watcher..."
  sys.puts "#{source} -> #{destination}"
  watcher = spawn 'coffee', ['-cwl', '-r', 'coffeescript-growl', '-o', destination, source]

  [watcher].forEach (child) ->
    child.stdout.on 'data', (data) ->
      sys.print data
    child.stderr.on 'data', (data) ->
      sys.print data
